import * as React from 'react';
import './App.css'
import dataJson from "./data.json"
import { Gallery, GalleryItem } from './components/Layout3';
import appConfig from "./appConfig.json"
import axios from 'axios';
import { useEffect, useState } from 'react';
import CardMain from './components/Card2';
import Card3 from "./components/Card4"
import Card2 from "./components/Finalcard"
import Card4 from "./components/CardAndreia"
import Card5 from "./components/CardMirko"
import { EmailShareButton, FacebookIcon, FacebookShareButton, LineIcon, LineShareButton, LinkedinShareButton } from 'react-share';
import { IconButton, Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { MailOutlineOutlined, Menu } from '@mui/icons-material';
import SearchAppBar from './components/SearchAppBarTop';
import AboutUs from './components/AboutUs';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import SimpleSlide from './components/SlideButton';
import FloatingActionButtons, { FloatingActionButtonGroup } from './components/FAB';
import SpeedDailTools from './components/SpeedDial';
import ShareBar from './components/ShareBar';


export default function App() {

    const [data, setData] = useState(null)
    const [version, setVersion] = useState(1)
    var CardChosen;
    switch(version){
        case 1:
            CardChosen = CardMain
            break;
        case 2:
            CardChosen = Card2
            break;
        case 3:
            CardChosen = Card3
            break;
        case 4:
            CardChosen = Card4
            break;
        case 5:
            CardChosen = Card5
            break;
    }
    useEffect(() => {
        // axios.get is an asyncronous function
        // you use .then chain with input function that takes
        //  * previous chain's return as input
        axios.get(appConfig.entryUrl)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setData(response.data)
                }
            })

    }, [appConfig])

    // data null means false
    // data is a state variable. this makes appcontent a state-dependent 
    // component
    let appcontent = data ?
        <AppContent users={convertUsersToArrayOfObject([...data])} CardChosen={CardChosen}/> :
        <div style={{color: "black"}}>Loading...</div>

    // console.log("https://tpemartin.github.io"+appLogo)
    return (

        <div className="App">
            {/* <AboutUs /> */}
            {
             appcontent
                
            }
            
        </div>

    )
}

function convertUsersToArrayOfObject(users) {
    const pos = getUserPositionIndex(users[0])

    const usersArrayOfObject = users.map(
        (user) => {
            return getUser(user, pos)
        }
    )
    usersArrayOfObject.shift()
    return usersArrayOfObject
}

function getUser(targetUser, pos) {
    return (
        {
            name: targetUser[pos.name],
            grade: targetUser[pos.grade],
            imgSrc: targetUser[pos.imgSrc],
            wish: targetUser[pos.wish],
            id: targetUser[pos.id],
            sealVariant: targetUser[pos.sealVariant],
            sealLocation: targetUser[pos.sealLocation]
        }
    )
}
function getUserPositionIndex(user0) {
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    pos.sealVariant=pos.sealVariant
    pos.sealLocation=pos.sealLocation
    return pos
}

function AppContent({ users, CardChosen }) {
    
    // window.users means there is a global variable named users
    
    window.autocompleteOptions = [] // autocompleteOptions is a global variable
    users.forEach(e => {
        window.autocompleteOptions.push(
            {
                label: e.name + ' - ' + e.grade,
                id: e.id
            }
        )
    })
   
    // Keep chair card first
    function putChairFirst(users){
        const chairIndex = users.map(e=> e.name).findIndex(e=>e==="李叢禎")
        users=[...users] // copy the array
        const user1 = users.splice(chairIndex,1)[0]
        users.reverse()
        return [user1, ...users]
    }
    
    
   
    const cards = putChairFirst(users).map((e, i) => {


        return (
            <GalleryItem key={i} className={e.grade}>
                
                <CardChosen user={e} />
                <ShareBar shareLink={appConfig.appUrl + '#' + e.id} title={'來自 '+e.name + ' - ' + e.grade+' 的祝賀'} />
            </GalleryItem>
        )
    })

    useEffect(() => {
        scrollIntoViewWithHashId()
    }, [])

  
    return (
        <div>
            
            <SearchAppBar autocompleteOptions={window.autocompleteOptions} />
            <div className="main2">
                <Gallery>
                    <>
                        {cards}
                        <div className="endCard" />
                    </>
                </Gallery>
                <SpeedDailTools autocompleteOptions={autocompleteOptions}/>
            </div>
            {/* <FloatingActionButtons autocompleteOptions={autocompleteOptions}/> */}
            
            {/* <SpeedDailTools autocompleteOptions={autocompleteOptions}/> */}
        </div>

    )

}

function scrollIntoViewWithHashId() {
    const hash = window.location.hash;
    if (hash) {
        const id = hash.slice(1);
        //console.log(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ block: "start", inline: "nearest" });
        }
    }
}
