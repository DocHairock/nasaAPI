import React from "react";

const CameraMenu = () =>{
    return(   
        <div >
    
        <input  type="radio" id="radio-1" name="radios"></input>
        <label htmlFor="radio-1">FHAZ</label>

        <input  type="radio" id="radio-2" name="radios" ></input>
        <label htmlFor="radio-2">RHAZ</label>

        <input  type="radio" id="radio-3" name="radios" ></input>
        <label htmlFor="radio-3">MAST</label>

        <input  type="radio" id="radio-4" name="radios" ></input>
        <label htmlFor="radio-4">CHEMCAM</label>

        <input  type="radio" id="radio-5" name="radios" ></input>
        <label htmlFor="radio-5">MAHLI</label>

        <input  type="radio" id="radio-6" name="radios" ></input>
        <label htmlFor="radio-6">MARDI</label>

        <input  type="radio" id="radio-7" name="radios" ></input>
        <label htmlFor="radio-7">NAVCAM</label>
    
      </div>
      )      
    }

export default CameraMenu;

