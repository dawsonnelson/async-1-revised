import React, { Component } from 'react'
import axios from 'axios'
import NavBin from '../Nav/Nav-bin'
import './Items.css'

export default class Items extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            binName: '',
            binPrice: '',
            itemChange: false,
        }
    }

    componentDidMount(){
        axios.get(`/api/shelfie/getItem?id=${this.props.match.params.item}`)
        .then(res=>{
            this.setState({
                binName: res.data.bin_name,
                binPrice: res.data.bin_price
            })
        })
    }


    handleEdit(){
        this.setState({
            itemChange: true
        })
    }
    
    handleNameInput(val){
        console.log(val)
        this.setState({
            binName: val
        })
    }
    
    handlePriceInput(val){
        this.setState({
            binPrice: val
        })
    } 

    handleEdit2(){
        axios.put(`/api/shelfie/editItem?id=${this.props.match.params.item}`, {binName: this.state.binName, binPrice: this.state.binPrice} )
        this.setState({
            itemChange: false
        })
    }

    handleDelete(){
        axios.delete(`/api/shelfie/deleteItem?id=${this.props.match.params.item}`)
        .then(res=>{
            this.props.history.push(`/bins/${this.props.match.params.item[0]}`)
        })
    }

    render(){
        return(
            <div className = 'app'>
                <div className = 'nav'>
                    <NavBin url = {this.props.location.pathname} param = {this.props.match.params.item}/>
                </div>
                <div className = 'big-container'>
                <div className = 'white'></div>
                    <div className = 'content'>   
                        <div className = 'right'>
                            <div className = 'data'>
                            <span className = 'input-titles'> Name </span>
                                {!this.state.itemChange ? <input className = 'edit-input' value = {this.state.binName}></input> : <input className = 'edit-input' value = {this.state.binName} onChange = {(e)=>this.handleNameInput(e.target.value)}></input>}
                                    <span className = 'input-titles'> Price </span>
                                {!this.state.itemChange ? <input className = 'edit-input' value = {this.state.binPrice}></input> : <input className = 'edit-input' value = {this.state.binPrice} onChange = {(e)=>this.handlePriceInput(e.target.value)}></input>}
                            </div>
                            <div className = 'button-data'>
                                {!this.state.itemChange ? <button className = 'edit' onClick = {()=>this.handleEdit()}> Edit </button> : <button className = 'save' onClick = {()=>this.handleEdit2()}> Save</button>}
                                <button className = 'delete' onClick = {()=>this.handleDelete()}> Delete </button>
                            </div>
                        </div>               
                    </div> 
                </div>
            </div>
        )
    }
}