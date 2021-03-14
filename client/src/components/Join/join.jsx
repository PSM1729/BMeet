import React, { Component } from 'react';
import { Input} from '@material-ui/core';
import bg1 from '../../images/2.png';
import './join.css';

class Join extends Component{
    constructor(props) {
        super(props)
            this.state = {
                path:''
            
        }
    }
    ipChange = (e) => this.setState({ path: e.target.value })

    toJoinExist = (e) => {
        var path = this.state.path.split("/")
        window.location.href = `/${path[path.length - 1]}`
    }

    toJoinEmpty = (e) => {
        var path = Math.random().toString(36).substring(5, 9)
		window.location.href = `/${path}`
    }

    render() {
        return (
            <div style={{backgroundColor:'#D4EDEB' ,height:'700px',textAlign:'center',display:'flex'}}>
            <img src={bg1} alt="VIDEO MEET" />
            <div className="box">
                <h2>JOIN A MEET</h2>
                <Input placeholder="URL" onChange={e => this.ipChange(e)}></Input>
                <br/><br/>    
                <button onClick={this.toJoinExist}>JOIN</button>
                <br /><br/>
                <h2>CREATE A MEET</h2>
                <button onClick={this.toJoinEmpty}>CREATE</button>
            </div>
        </div>       
        )
    }
}


export default Join;