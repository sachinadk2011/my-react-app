
import React, { useState } from 'react';
import TextEditBox from './TextEditBox';


export default function Speech(props) {
    let currentSpeechInstance;
    const handleread =  () =>{
     const speech = new SpeechSynthesisUtterance();
     speech.text = text;
     if (currentSpeechInstance) {
        window.speechSynthesis.cancel(currentSpeechInstance); // Stop any ongoing speech
      }
    
       try {
         window.speechSynthesis.speak(speech);
         currentSpeechInstance = speech.text; // Store reference
        document.getElementById("pause").style.opacity = 1;
       } catch (error) {
         console.error('Error:', error); // Log errors for troubleshooting
       }
      
       }
       const [pause, setPause] = useState("Pause speech");
         const handlepause = () =>{
          if (currentSpeechInstance || window.speechSynthesis.resumed) {
             window.speechSynthesis.pause(currentSpeechInstance);
             setPause("Resume speech");
         } else if (window.speechSynthesis.paused){
          window.speechSynthesis.resume(currentSpeechInstance);
          setPause("Pause speech");
         }
         
         else {
             console.error('No speech instance to pause.');
             document.getElementById("pause").style.opacity= 0;
        }
    
    
         
     }

  return (
    <TextEditBox />
  )
}
