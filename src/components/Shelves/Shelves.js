import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

export default class Shelves extends Component {

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                <Nav url = '/'/>
                </div> 
                <div className = 'shelves'>
                    <Link to='/bins/A'><div className = 'shelf'> Shelf A </div></Link>
                    <Link to='/bins/B'><div className = 'shelf'> Shelf B </div></Link>
                    <Link to='/bins/C'><div className = 'shelf'> Shelf C </div></Link>
                    <Link to='/bins/D'><div className = 'shelf'> Shelf D </div></Link>
                </div>
            </div>
        )
    }
}
