import React from 'react';
import bg1 from '../../images/2.png';
import './join.css';

const Join = () => {
    return (
        <div style={{backgroundColor:'#D4EDEB' ,height:'700px',textAlign:'center',display:'flex'}}>
            <img src={bg1} alt="VIDEO MEET" />
            <div className="box">
                <h2>JOIN A MEET</h2>
                <input></input><br/>
                <button>JOIN</button>
                <br /><br/>
                <h2>CREATE A MEET</h2>
                <button>CREATE</button>
            </div>
        </div>
    )
}

export default Join
