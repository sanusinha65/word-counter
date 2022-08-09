import React, { useState } from 'react';

export default function TextForm(props) { 

  // Uppercase Function
  const handleUpClick =()=> {
    console.log("I am Uppercase Function Working Properly");
    let upperCase= text.toUpperCase();
    setText(upperCase);
    console.log("Before: " +text);
    console.log("After: " +upperCase);
    props.showAlert(
      "converted To Uppercase!","success");
}
// Lowercase Function
const handleLowClick =()=> {
  console.log("I am Lowercase Function Working Properly");
  let lowerCase= text.toLowerCase();
  setText(lowerCase);
  console.log("Before: " +text);
    console.log("After: " +lowerCase);
    props.showAlert(
      "converted To lowercase!","danger");
}
// OnChange
const handleOnChange =(event)=> {
  console.log("I am Onchange Function Working Properly");
  setText(event.target.value);
  
}

// let myStyle= {
//   color: "white",
//   backgroundColor: "black",
//   width: "100%",
//   height: "150%",
//   padding: "5%",
// }
// State for Dark Mode Button
const [myStyle, setMyStyle] = useState({
  color: "black",
  backgroundColor: "white",
  width: "100%",
  height: "150%",
  padding: "5%",
});
const [myBtnText, setMyBtnText] = useState("Enable Dark Mode");

const toggleStyle =()=>{
  if(myStyle.color==="black"){
    setMyStyle({
      color: "white",
      backgroundColor: "black",
      width: "100%",
      height: "150%",
      padding: "5%",
      })
      setMyBtnText("Enable Light Mode");
      props.showAlert(
        "Dark Mode Enabled!","danger");
  }
    else{setMyStyle({
    color: "black",
    backgroundColor: "white",
    width: "100%",
    height: "150%",
    padding: "5%",
    })
    setMyBtnText("Enable Dark Mode");
    props.showAlert(
      "Light Mode Enabled!","success");
  }
}

// State 
  const [text, setText] = useState("Enter Text Here");
  return (
    <div style={myStyle}>
    <div className="mb-3">
    <div className="form-group">
    <label htmlFor="myBox" className="h1">{props.heading}</label>
    <div className="form-check form-switch
    ">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleStyle} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{myBtnText}</label>
</div>
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
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    
  </div>
  </div>
  )
}
