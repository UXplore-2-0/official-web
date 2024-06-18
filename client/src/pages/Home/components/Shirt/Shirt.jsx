import React, { useState } from 'react';


import './shirt.css';
import BlueShirt from './Blue.png';
import WhiteShirt from './White.png';
import { Link } from 'react-router-dom';

function Shirt() {
    const [color, setColor] = useState('blue');

    return (
        <div id='shirt-back' className='shirt-back' style={{}}>
            <div className="photo-container1" style={{}}>
                <img style={{}} className='Photo' src={color === "blue" ? BlueShirt : WhiteShirt} alt="" />
            </div>

            <div className="marketi">
                <div className="wording1">Stand out in style with the Official T-Shirt!
                <br />Pre-Order Yours Now! </div>
                <br />
                {/* <button style={{ backgroundColor: "blue", borderRadius: "50%", width: "50px", height: "50px", border: "none" }} onClick={() => setColor("blue")  }>Blue</button> */}
                <div style={{color: 'white' , textAlign: "center" , fontSize:"1.2em" }} >Rs 1400</div>
                <div className='hi' >
                    
                    <div>
                        <div className='button-connn'>
                            <button style={{ backgroundColor: "#013649" ,  borderRadius: "50%", width: "30px", height: "30px", border: "1.5px solid black" }} onClick={() => setColor("blue")}></button>
                            <button style={{ backgroundColor: "white", borderRadius: "50%", width: "30px", height: "30px", border: "1.5px solid black" }} onClick={() => setColor("white")}></button>
                        </div>
                        <div style={{color: "white", paddingTop:"10px" , textAlign: "center" }} >Choose the color</div>
                    </div>
                    <div style={{display: "flex" ,justifyContent: "center"}} >
                        
                            <button onClick={()=> window.location.href=' https://bit.ly/3Vbuh1v'} className='button-17'>Buy Now</button>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Shirt;