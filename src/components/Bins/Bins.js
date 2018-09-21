import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Bins/Bins.css'
import Nav from '../Nav/Nav'

export default class Bins extends Component {
    constructor(props){
        super(props)

        this.state = {
            bin1: null,
            bin2: null,
            bin3: null,
            bin4: null,
            bin5: null,            
        }
    }

    componentDidMount(){
        axios.get(`/api/shelfie/bins?bins=${this.props.match.params.bins}`)
        .then(res=>{
            console.log(res.data)
            
            this.setState({
                bin1: res.data[0],
                bin2: res.data[1],
                bin3: res.data[2],
                bin4: res.data[3],
                bin5: res.data[4],
                
            })
        })
        
    }

    

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <Nav url = {`/bins/${this.props.match.params.bins}`}/>
                </div>
            <div className = 'shelves'>
                {this.state.bin1 ? 
                    <Link to = {`/bin/${this.props.match.params.bins}1`}><div className = 'individual-bin'> Bin 1 </div></Link> : 
                    <Link to = {`/create/${this.props.match.params.bins}1`}><div className = 'add-to-bin-button'> + Add Inventory </div></Link>}
                {this.state.bin2 ? 
                    <Link to = {`/bin/${this.props.match.params.bins}2`}><div className = 'individual-bin'> Bin 2 </div></Link> : 
                    <Link to = {`/create/${this.props.match.params.bins}2`}><div className = 'add-to-bin-button'> + Add Inventory </div></Link>}
                {this.state.bin3 ? 
                    <Link to = {`/bin/${this.props.match.params.bins}3`}><div className = 'individual-bin'> Bin 3 </div></Link> : 
                    <Link to = {`/create/${this.props.match.params.bins}3`}><div className = 'add-to-bin-button'> + Add Inventory </div></Link>}
                {this.state.bin4 ? 
                    <Link to = {`/bin/${this.props.match.params.bins}4`}><div className = 'individual-bin'> Bin 4 </div></Link> : 
                    <Link to = {`/create/${this.props.match.params.bins}4`}><div className = 'add-to-bin-button'> + Add Inventory </div></Link>}
                {this.state.bin5 ? 
                    <Link to = {`/bin/${this.props.match.params.bins}5`}><div className = 'individual-bin'> Bin 5 </div></Link> : 
                    <Link to = {`/create/${this.props.match.params.bins}5`}><div className = 'add-to-bin-button'> + Add Inventory </div></Link>}
            </div>

        </div>
        )
    }
}