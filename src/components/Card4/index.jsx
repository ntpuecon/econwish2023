import * as React from 'react';

import { useState } from "react"
import "./index.css"
import pigeon from "./pigeon.svg"

import { ToggleButton } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import Image from "mui-image"
import { Typography } from "@mui/material"



export default function Card2({ user }) {


  const { name, grade, imgSrc, wish } = user

  const [inside, setInside] = useState(false)
  const [view, setView] = useState("text")

  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);



  function showtext() {
    if (view === "picture") {
      setView("text")
    } else {
      setView("picture")
    }
  }

  function Outside() {
    return (<>
      <div className="stamp-section" style={{ display: "flex", flexDirection: "column" }}>
        <div className="main-image" >
          <Image
            src={imgSrc}
            height="305px"
            width="305px"
            duration={0}
            style={{ position: "relative", top: 25 }}
          />
        </div>
        <img src={pigeon} alt="" style={{ maxWidth: 100, position: "absolute", right: 70, top: 310, transform: "rotate(28deg)" }}></img>
      </div>
      <div className="sender-info" style={{ marginTop: 50 }}>
        <div className="sender-name" style={{ fontFamily: 'Inter', fontStyle: "normal", fontWeight: 600, fontSize: 32 }}>{name}</div>
        <div className="sender-grade" style={{ color: "gray", fontFamily: 'Inter', fontStyle: "normal", fontWeight: 600, fontSize: 20 }}>{grade}</div>
        <button className="wish-text" style={{
          width: 300, height: 150,
          color: "gray", fontFamily: 'Inter', fontStyle: "normal", fontWeight: 300, fontSize: 20,
          overflow: "hidden", textOverflow: "ellipsis"
        }}
          onClick={function (e) {
            e.preventDefault();
            setInside(true)
          }}>{wish}</button>
      </div>
    </>)
  }


  function Inside() {



    return (<>
      <div className="stamp-section" style={{ display: "flex", flexDirection: "column" }}>
        <Image
          src={imgSrc}
          height="653px"
          width="386px"
          duration={0}
          style={{ position: "relative" }}
        />
        {(view === "text") ? <Typography color={"white"} sx={{ zIndex: 1, position: "absolute", width: 300, top: 200, right: 75 }}>{wish}</Typography> : ""}
        {(view === "text") ? <div className="background" style={{ height: 653, width: 386, background: "#0e0d0d96", position: "absolute" }}></div> : ""}

        <ToggleButton
          value={formats}
          sx={{ width: 40, height: 40, position: "absolute", bottom: 100, right: 200, color: "black", background: (view === "text") ? "gray" : "white", "&:hover": { background: "white" }, borderRadius: "90%" }}
          onClick={showtext}
        ><ImageIcon /></ToggleButton>


        <IconButton sx={{ width: 40, height: 40, position: "absolute", top: 50, right: 50, "&:hover": { borderColor: "none" }, "&:focus": { outline: "none" } }}
          onClick={function (e) { e.preventDefault(); setInside(false) }}>
          <CloseIcon sx={{ color: 'white' }} />
        </IconButton>

      </div >
    </>)
  }

  return (<>
    <div className="card">
      <div className="card-content">
        {(inside == true) ? <Inside /> : <Outside />}
      </div>
    </div >


  </>
  )
}