import * as React from 'react';
import './App.css'
import { Gallery, GalleryItem } from '../components/Layout3';
import appConfig from "../appConfig.json"
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card2 from '../components/Card4';
import SearchAppBar from '../components/SearchAppBarTop';
import AboutUs from '../components/AboutUs';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import SimpleSlide from '../components/SlideButton';
import FloatingActionButtons, { FloatingActionButtonGroup } from '../components/FAB';
import SpeedDailTools from '../components/SpeedDial';
import appLogo from "../app.png"
import ShareBar from '../components/ShareBar';

export default function App2() {

    const [data, setData] = useState(null) // rendering code part


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

    }, [])
    // axios.get(appConfig.entryUrl)
    // .then((response) => {
    //     console.log(response)
    //     if (response.status === 200) {
    //         setData(response.data)
    //     }
    // })
    // data null means false
    // data is a state variable. this makes appcontent a state-dependent 
    // component
    let appcontent = data ?
        <AppContent users={convertUsersToArrayOfObject([...data])} /> :
        <div style={{color: "black"}}>Loading...</div>

    
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

function AppContent({ users }) {
    
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
   
    // users.reverse()
    users=[...users]
    users.reverse()
    //users.pop()
    const user1 = users.pop() //[...users].pop()
    
   
    const cards = [user1, ...users].map((e, i) => {


        return (
            <GalleryItem key={i} className={e.grade}>
                
                <Card2 user={e} />
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
            
            <SpeedDailTools autocompleteOptions={autocompleteOptions}/>
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
