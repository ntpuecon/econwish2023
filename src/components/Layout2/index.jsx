import play from './img/play-icon.svg'
import previous from './img/previous-icon.svg'
import next from './img/next-icon.svg'
import './index.css'

export function Main({children}){
    return(
        <div className="main">
            {children}
        </div>
    )
}

export function Navbar() {
    return (
        <div className="navbar">
            <div className="play">
                <img src={play} width="40px" />
            </div>
            <div className="previous">
                <img src={previous} width="40px" />
            </div>
            <div className="next">
                <img src={next} width="40px" />
            </div>
        </div>

    )
}

