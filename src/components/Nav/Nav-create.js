import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/logo.png'
import '../Nav/Nav-create.css'

export default function NavBin (props){
    let param = props.param
    let param2 = props.param[0]
    let param3 = props.param[1]
    switch(props.url){
        case `/create/${param}`:
            return(
                <div className = 'nav-shelf'>
                    <div className = 'logo-holder'>
                        <Link to = '/'><img className = 'shelf-image' src = {image} alt = 'logo'/></Link>
                    </div>
                    <div className = 'shelf-title-box'>
                        <Link to = {`/bins/${param2}`}><span className = 'shelf-title'> Shelf {param2} </span></Link>
                    </div>
                    <div className = 'shelf-bin-box'>
                        <span className = 'shelf-bin-title'> Add to Bin {param3} </span>
                    </div>
                </div>
            )
        case '/':
                return(
                        <div className = 'nav'>
                        <div className = 'nav-contents'>
                            <img className = 'image' src = {image} alt = 'logo'/>
                            <Link to = '/'><span className = 'shelfie'> SHELFIE </span></Link>
                        </div>
                        </div>
                )
    }
}