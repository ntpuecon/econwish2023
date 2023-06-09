import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import "./index.css"
import "./wish.css"
import PostedStamp, {sealVariants, sealLocations} from "../PostedStamp"
import Stack from '@mui/material/Stack';
import { Box, Button, Container } from '@mui/material';
import Image from "mui-image"
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react';
import CustomizedSwitches from './Switch';
import axios from 'axios';

export default function Card2({ user }) {

  const { name, grade, imgSrc, wish, id, sealVariant, sealLocation } = user

  // console.log(user)
  const [showFront, setShowFront] = useState(true)

  function handleClipWish() {
    setShowFront(false)
  }
  function handleCloseBackContent() {
    setShowFront(true)
  }

  useEffect(() => {
    axios.get(imgSrc).then(res => {
      console.log(res)
    })
  }, [])

  var cardContent = showFront ?
    <ContentPostalFront imgSrc={imgSrc} sealVariant={sealVariant} 
      sealLocation={sealLocation}
    name={name} grade={grade} wish={wish} onClick={handleClipWish} /> :
    <ContentPostalBack imgSrc={imgSrc} wish={wish} onClick={handleCloseBackContent} />



  return (
    <Card className='border-image' sx={{ maxWidth: 345, margin: "auto", height: 587 }}>
      <div id={`${id}`} className='card-id'></div>
      {cardContent}
    </Card>
  );
}

function Sender({ name, grade }) {
  return (
    <div className="sender">
      <div className="label text-shadow">From:</div>
      <div className="sender-info">
        <div className="sender-name">
          <div className="sender-name-text text-shadow">{name}</div>
        </div>
        <div className="sender-grade">
          <div className="sender-grade-text text-shadow">{grade}</div>
        </div>
      </div>
    </div>

  )
}

function Wish({ wish }) {
  return (

    <div className="wish">
      <div className="wish-text">
        <Button color='secondary'>
          <q>
            <Typography>{wish}</Typography>
          </q>
          <q><span style={{ padding: "0 10px" }}>{wish}</span></q>
        </Button>
      </div>
    </div>

  )
}

function ContentPostalFront({ imgSrc, sealVariant, sealLocation, name, grade, wish, onClick }) {

  return (
    <CardContent>
      <Stack spacing={0}>
        <Box sx={{
          height: 350
        }}>
          <PostedStamp imgSrc={imgSrc} sealVariant={sealVariant} sealLocation={sealLocation} />
        </Box>
        <Box mt={5} pl={3}>
          <Sender name={name} grade={grade} />
        </Box>

        <Box mt={3}>
          <Button color='primary' onClick={onClick}>
            <Typography noWrap sx={{ width: "300px" }}>{wish}</Typography>
          </Button>
        </Box>

      </Stack>
    </CardContent>
  )
}
function ContentPostalBack({ imgSrc, wish, onClick }) {

  const [showPic, setShowPic] = useState(false)

  function handleToggle() {
    if (showPic) {
      setShowPic(false)
    } else {
      setShowPic(true)
    }
  }

  var op = showPic ? 1 : 0.3
  var vs = showPic ? "hidden" : "visible"

  return (

    <div style={{ height: "100%", position: "relative" }}>

      <Image
        duration={0}
        src={imgSrc}
        fit="cover"
        style={{ opacity: op }}
      />
      <div style={{ position: "absolute", top: "0", height: "100%", visibility: vs }}>
        <Stack sx={{ height: "100%", justifyContent: "center" }}>
          <Container>
            <Box>
              <Typography>
                {wish}
              </Typography>
            </Box>
          </Container>
        </Stack>
      </div>
      <div style={{ position: "absolute", bottom: "0%", width: "100%" }}>
        <Container><CustomizedSwitches onChange={handleToggle} /></Container>
      </div>
      <IconButton
        aria-label="close"
        sx={{
          position: 'absolute',
          color: (theme) => theme.palette.grey[500],
          right: 8,
          top: 8
        }}
        onClick={onClick}
      >
        <CloseIcon />
      </IconButton>
    </div>


  )
}