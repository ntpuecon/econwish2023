import "./index.css"
import seals from "./seals2.jsx"
import Image from "mui-image";

export default function Seal2({variant}) {

    variant = variant? (variant-1):2
       
    return (
        <div className="sign-info">
            <Image
                className="seal-color"
                duration={0}
                src={seals[variant].src}
                fit="fill"
                style={seals[variant].style}
            />
        </div>
    )
}
