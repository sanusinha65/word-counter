import React, { useState } from 'react';

export default function TextForm(props) { 

  // Uppercase Function
  const handleUpClick =()=> {
    console.log("I am Uppercase Function Working Properly");
    let upperCase= text.toUpperCase();
    setText(upperCase);
    console.log("Before: " +text);
    console.log("After: " +upperCase);
}
// Lowercase Function
const handleLowClick =()=> {
  console.log("I am Lowercase Function Working Properly");
  let lowerCase= text.toLowerCase();
  setText(lowerCase);
  console.log("Before: " +text);
    console.log("After: " +lowerCase);
}
// OnChange
const handleOnChange =(event)=> {
  console.log("I am Onchange Function Working Properly");
  setText(event.target.value);
  
}
// State 
  const [text, setText] = useState("Enter Text Here");
  return (
    <div className="mb-3">
    <div className="form-group">
    <label htmlFor="myBox" className="h1">{props.heading}</label>
    <br />
    <br />
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button type="button" className="btn btn-success m-3" onClick={handleUpClick}>Convert To Uppercase</button>
  <button type="button" className="btn btn-danger" onClick={handleLowClick}>Convert To Lowercase</button>

    <div>
      <h1>Summary</h1>
      <p>{text.split(" ").length > 1 ? <p> {text.split(" ").length} Words and {text.length} Characters</p> : <p> 0 Words and {text.length} Characters</p> } </p>
      <p>Reading Time: {parseInt(0.008 * text.split(" ").length)} Minutes </p>
      {/* <p>Reading Time: {parseInt(0.008 * text.split(" ").length) < 60 ? 
      <p>{parseInt(0.008 * text.split(" ").length)} Minutes </p> 
      : <p>{parseInt(parseInt(0.008 * text.split(" ").length)/60)} Hour</p>  } </p> */}
      <h1>Here How It Will Look Like</h1>
      <p>{text}</p>
    </div>
  </div>
  )
}
