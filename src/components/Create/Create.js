import React, { Component } from 'react'
import NavCreate from '../Nav/Nav-create'
import axios from 'axios'
import './Create.css'


export default class CreateItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            binName: null,
            binPrice: null,
            binImage: null
        }
    }

    handleAddNameInput(){
        axios.post('/api/shelfie/createItem', {id: this.props.match.params.bin, name: this.state.binName , price: this.state.binPrice, image: this.state.binImage})
        .then(res=>{
            this.props.history.push(`/bins/${this.props.match.params.bin[0]}`)
        })
    }

    handlePriceInput(amount){
        this.setState({
            binPrice: amount
        })
    }


    handleNameInput(amount){
        this.setState({
            binName: amount
        })
    }

    handleImageInput(amount){
        this.setState({
            binImage: amount
        })
    }


    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <NavCreate url = {this.props.location.pathname} param = {this.props.match.params.bin}/>
                </div>
                <div className = 'container'>
                    <span className = 'container-title'> Name </span>
                    <input className = 'input-box' onChange = {(e)=>this.handleNameInput(e.target.value)}/>
                    <span className = 'container-title'> Price </span>
                    <input className = 'input-box' onChange = {(e)=> this.handlePriceInput(e.target.value)}/>
                    <span className = 'container-title-image'> Image(address) </span>
                    <input className = 'input-box' onChange = {(e)=> this.handleImageInput(e.target.value)}/>
                    <button className = 'add-in-button' onClick = {()=> this.handleAddNameInput()}> + Add to Inventory </button>
                </div>
            </div>
        )
    }
}