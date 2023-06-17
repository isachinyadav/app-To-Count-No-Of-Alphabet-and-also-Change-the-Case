//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import PropTypes from 'prop-types'
//import About from "./Component/About";
 import Textform from "./Component/Textform";
 import Navbar from "./Component/Navbar";
 import  Alert from "./Component/Alert";
 function App() {
  const [mode , setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({

      message: message,
      type: type
    })
  }
  let ToggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= "grey"; 
      showAlert("Dark mode has been enabled ","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white";
      showAlert("light mode has been enabled ","success");

    }
  }
  return (
    
    <>
    
    <Navbar title="Textutils" mode={mode} ToggleMode={ToggleMode} />
    
      <Alert alert="be safe"/>
    {/* <About /> */}
    <Textform heading="Enter something about your life" />

    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string ,
  About: PropTypes.string
}
export default App