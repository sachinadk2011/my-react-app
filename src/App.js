import React, {useState} from 'react'
import './App.css';
import Navbar from './component/Navbar';
import TextEditBox from './component/TextEditBox';

function App() {
  const [mode , setMode] = useState('light');
  const [md , setMd] = useState('dark');

  const mod = ()=>{
    if(mode==='light'){
      
      setMode('dark');
      
      setMd('light');
      document.body.style.backgroundColor = "#080763";
      
    }else{
      
      setMode('light');
      setMd('dark');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Navbar title="TextEditor"  mode={mode} mod={mod} md={md}/>
    <TextEditBox heading="Enter Text to edit" mode={mode}
    pause={pause} />
    </>
  );
}

export default App;
