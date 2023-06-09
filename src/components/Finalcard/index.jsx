import "./index.css";
import background from "./background3.svg";
import stampBackground from "./stampBackground.svg";
import Seal2 from "../Seal2";
import { useState } from 'react';

import Image from "mui-image";
import { Box, Button, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import CloseIcon from '@mui/icons-material/Close';
import FilterIcon from '@mui/icons-material/Filter';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';


export default function Card2({user}) {
    
    //Need date, or set the date on 6/10.
    //var { name, date, grade, imgSrc, wish, id } = user
    //date = date? date:"2023-06-10"
    const { name, grade, imgSrc, wish, id } = user
    var date = "2023-06-10"

    var [showFront, setShowFront] = useState(0)

    function handleClipWish() {
        setShowFront(1)
    }
    function handleCloseBackContent() {
        setShowFront(0)
    }
    function handleImgContent() {
        setShowFront(2)
    }

    var cardContent;

    switch(showFront){
        case 0:
            cardContent = <ContentFont date={date} grade={grade} name={name} imgSrc={imgSrc} wish={wish} onClick={handleClipWish} />;
            break;
        case 1:
            cardContent = <ContentBack imgSrc={imgSrc} wish={wish} onClick={handleCloseBackContent} imgOn={handleImgContent} onClick2={handleClipWish}/>;
            break;
        case 2:
            cardContent = <ContentBackImg imgSrc={imgSrc} onClick={handleCloseBackContent} imgOn={handleImgContent} onClick2={handleClipWish}/>;
            break;
        default:
            cardContent = "Sorry";
    }
    
    return (
        <div className="finalcard" id={id}>
            <div id={`${id}`}></div>
            <div className="background">
                <img src={background} />
            </div>
            {cardContent}
        </div>
    )
  }

function ContentFont({ date, grade, name, imgSrc, wish, onClick }){
    return(
        <div className="cardInfo">
            <Top date={date} grade={grade} name={name} imgSrc={imgSrc} />
            <Wish wish={wish} onClick={onClick}/>
        </div>
    )
}
function ContentBack({ imgSrc, wish, onClick, imgOn, onClick2 }) {
    return (
        <div className="cardInfo" style={{ padding: "0px" }}>
            <div style={{ height: "100%", position: "relative", display: "flex", 'justify-content': "center" }}>
                <Image
                    duration={0}
                    src={imgSrc}
                    fit="cover"
                    style={{ opacity: 0.3 }}
                />
                <div style={{ position: "absolute", top: "0", height: "100%", display: "flex", 'justify-content': "center", 'flex-direction': "column" }}>
                    <Stack sx={{ height: "100%", justifyContent: "center" }}>
                        <Container>
                            <Box>
                                <Typography>
                                    {wish}
                                </Typography>
                            </Box>
                        </Container>
                    </Stack>
                    <div className="imgIcon" style={{ position: "relative", display: "flex", 'justify-content': "center" }}>
                        <IconButton onClick={imgOn}>
                            <FilterIcon />
                        </IconButton>
                        <IconButton onClick={onClick2}>
                            <EditNoteOutlinedIcon />
                        </IconButton>
                    </div>
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
        </div>
    )
  }
  function ContentBackImg({ imgSrc, onClick, imgOn, onClick2 }) {
    return (
        <div className="cardInfo" style={{ padding: "0px" }}>
            <div style={{ height: "100%", position: "relative", display: "flex", 'justify-content': "center" }}>
                <Image
                    duration={0}
                    src={imgSrc}
                    fit="cover"
                    style={{ opacity: 1 }}
                />
                <div style={{ position: "absolute", top: "0", height: "100%", display: "flex", 'justify-content': "center" }}>

                    <div className="imgIcon" style={{ position: "absolute", bottom: "0%", display: "flex", 'justify-content': "center" }}>
                        <IconButton onClick={imgOn}>
                            <FilterIcon />
                        </IconButton>
                        <IconButton onClick={onClick2}>
                            <EditNoteOutlinedIcon />
                        </IconButton>
                    </div>
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
        </div>
    )
}

function Top({ date, grade, name, imgSrc }) {
    return (
        <div className="top">
            <Date date={date} />
            <div className="top-info">
                <div className="sender">
                    <div className="sender-major">{grade}</div>
                    <div className="sender-name">
                        <div className="name">{name}</div>
                    </div>
                </div>
                <Stamp imgSrc={imgSrc} />
            </div>
        </div>
    )
}
function Date({date}){
    var date_split = date.split('')
    date_split.splice(4, 1)
    date_split.splice(6, 1)
    
    return (
        <div className="date">
            <div className="year">
                <div className="date-number">{date_split[0]}</div>
                <div className="date-number">{date_split[1]}</div>
                <div className="date-number">{date_split[2]}</div>
                <div className="date-number">{date_split[3]}</div>
            </div>
            <div className="month">
                <div className="date-number">{date_split[4]}</div>
                <div className="date-number">{date_split[5]}</div>
            </div>
            <div className="day">
                <div className="date-number">{date_split[6]}</div>
                <div className="date-number">{date_split[7]}</div>
            </div>
        </div>
    )
}
function Stamp({imgSrc}){
    return(
        <div className="stamp-info">
            <div className="stamp-background">
                <img src={stampBackground} />
            </div>
            <div className="stamp-image" >
                <Image
                    duration={0}
                    src={imgSrc}
                    width="100%"
                    height="100%"
                    fit="fill"
                />
            </div>
            <Seal2 variant={6} />
        </div>
    )
}
function Wish({wish, onClick}){
    return(
        <Box mt={3}>
            <Button color='secondary' onClick={onClick}>
                <Typography noWrap sx={{ width: "260px" }}>{wish}</Typography>
            </Button>
        </Box>
    )
}
