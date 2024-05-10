import React, {useState} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import TextEditBox from './component/TextEditBox';
import Alert from './component/Alert';
import About from './component/About';
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";



function App() {
  const [mode , setMode] = useState('light');
  const [md , setMd] = useState('dark');
  const [alert, setAlert] = useState(null);

  const displayAlert = (message , types) =>{
    setAlert ({
      msg : message,
      type : types
   })
   setTimeout(() => {
    setAlert(null);
   }, 2000);
  }
  
  const mod = ()=>{
    if(mode==='light'){
      
      setMode('dark');
      displayAlert("Dark mode is Enabled", "Successfully");
      
      setMd('light');

      document.body.style.backgroundColor = "#080763";
      
    }else{
      
      setMode('light');
      setMd('dark');
      
      displayAlert("Light mode is Enabled", "Successfully");
      document.body.style.backgroundColor = "white";
    }
  }
  
  return (
    
    <BrowserRouter basename="/my-react-app">
    <Navbar title="TextEditor"  mode={mode} mod={mod} md={md} displayAlert={displayAlert} />
    <Alert alert={alert} displayAlert={displayAlert} />
      
     
     
       <Routes >
          <Route path="/about.js" element={<About mode={mode} />} />
             
          <Route path="/TextEditBox.js" element={<TextEditBox heading="Enter Text to edit" mode={mode}
     displayAlert={displayAlert}  />} />   
        
      </Routes>  
    </BrowserRouter>
    
  );
}

export default App;
