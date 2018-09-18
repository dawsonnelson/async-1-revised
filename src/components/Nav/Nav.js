import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/logo.png'
import '../Nav/Nav.css'

export default function Nav (props){

    switch(props.url){
        case '/bins/A':
            return(
                <div className = 'nav-box'>
                    <div className = 'logo-box'>
                        <Link to ='/'><img className = 'logo-pic' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf A</span>
                    </div>
                </div>
            )
        case '/bins/B':
            return(
                <div className = 'nav-box'>
                    <div className = 'logo-box'>
                        <Link to ='/'><img className = 'logo-pic' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf B</span>
                    </div>
                </div>
            )
        case '/bins/C':
            return(
                <div className = 'nav-box'>
                    <div className = 'logo-box'>
                        <Link to ='/'><img className = 'logo-pic' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf C</span>
                    </div>
                </div>
            )
        case '/bins/D':
            return(
                <div className = 'nav-box'>
                    <div className = 'logo-box'>
                        <Link to ='/'><img className = 'logo-pic' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <span className = 'shelf-title'> Shelf D</span>
                    </div>
                </div>
            )
        case '/':
            return(
                <div className = 'nav'>
                {/* <div className = 'nav-contents'> */}
                
                    <img className = 'logo-pic' src = {image} alt = 'logo'/>
                    
                    <div className = 'shelfie2'> SHELFIE </div>
                </div>
                // </div>
            )
    }
}