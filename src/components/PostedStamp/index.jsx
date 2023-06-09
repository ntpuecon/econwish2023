
import Image from "mui-image"
import "./index.css"
import Seal from "./Seal"
import axios from "axios"
import { useEffect } from "react"
import { Skeleton } from "@mui/material"
import { useState } from "react"

export const sealVariants = [0, 1, 2, 3, 4]
export const sealLocations = [
  {
    left: '-10px',
    bottom: '-50px',
    transform: 'rotate(-45deg)'
  },
  {
    left: '-50px',
    bottom: '0px',
    transform: 'rotate(-10deg)'
  },
  {
    left: '-64px',
    bottom: '15px',
    transform: 'rotate(-42deg)'
  },
  {
    left: '120px',
    bottom: '-63px',
    transform: 'rotate(-6deg)'
  },
  {
    left: '-63px',
    top: '-54px',
    transform: 'rotate(-55deg)'
  }
]

export default function PostedStamp({ imgSrc, sealVariant, sealLocation }) {

  // console.log('sealVariant')
  // console.log(sealVariant)
  // sealVariant = sealVariant? (sealVariant-1) : 2
  console.log(sealLocation)
  sealLocation = sealLocation ? sealLocations[sealLocation] : { left: "-10px", bottom: "-50px", transform: "rotate(-45deg)" }

  // sealVariant = 1
  // sealLocation = { left: "10px", bottom: "-80px", transform: "rotate(45deg)" }

  return (
    <div className="stamp-holder">
      <Stamp imgSrc={imgSrc} />
      <Seal variant={sealVariant} location={sealLocation} />
    </div>
  )
}
function Stamp({ imgSrc }) {

  const [localSrc, setLocalSrc] = useState(null)

  useEffect(() => {
    axios.get(imgSrc, { responseType: 'blob' })
      .then(response => {
        // console.log(response)
        const imageSrc = URL.createObjectURL(response.data)
        setLocalSrc(imageSrc)
        // console.log(imageSrc)
      })
  }, [imgSrc])

  return (
    <div className="stamp">
      {
        localSrc ?
          <Image
            duration={0}
            src={localSrc} /> :
          <Skeleton variant="rectangular" width={222} height={284} />
      }

    </div>

  )
}