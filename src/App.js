import './App.css';
import TextForm from './Components/TextForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Alert from './Components/Alert';
import { useState } from "react";
import React from 'react';





function App(props) {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert(
      {
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      }, 2000);
  }
  return (
    <>
    <Header header="Word Counter" />
    <div>
    <Alert
    alert={alert} />
    </div>
    <div>
      <TextForm heading="Play With Words" showAlert={showAlert} />
    </div>
    
    </>
  );
}

export default App;
