import React from 'react';
import './Input.css'

function Input( { mic,record}) {
  return (

    <div  >
       <p className='f3 white'>
         Press the button to start recording
       </p> 
       <div className='center pa2'>
          <button type="button" id="mic" onClick={mic} >Get Microphone</button>
          <button type="button" id="record" onClick={record}  hidden>Record</button>
          <li id='clips'><audio id='audio_clip'></audio><a src='' id='audio_tag'> </a></li>


       </div>
       
    </div>
  ) 
}

export default Input;


/*          <button id='record' className="center grow link f4 pa2 white bg-black pointer shadow-5" >Record</button>
          <button id='stop' className="center grow link f4 pa2 white bg-black pointer shadow-5" >Stop</button>*/