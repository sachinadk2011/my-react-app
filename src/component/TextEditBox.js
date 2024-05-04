import React, {useState} from "react";
import Speech from "./Speech";

export default function TextEditBox(props) {
    const [text , setText] = useState("");
    
    
    const handlespaces = () =>{
      const newText = text.split(/\s+/);   // can use split(/[ ]+/)
      setText(newText.join(' '));
    }
    /*const handlespaces = () => {
      const newText = text.split(/\s+/)..filter(word => word !== '')join(' '); // Remove spaces and empty strings
      setText(newText);
  }*/
  

    const handleup = () =>{
      //console.log ("uppercase was clicked" + text);
       let newText = text.toUpperCase();
      setText(newText); 
    }

    const handlelow = () =>{
      let newText = text.toLowerCase();
      setText(newText); 
    }

    const handleclear = () =>{
      let newText = "";
      setText(newText); 
    }

    const handlecopy = () => {
      navigator.clipboard.writeText(text); 
     // props.showAlert("Copied to Clipboard!", "success");
  }

   /* const handlecopy = (event) =>{
      let text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(text.value);
    }*/

    /*const handlepaste = () =>{
      let newText = document.getElementById('paste-button');
      let text = document.getElementById('myBox');
      newText.addEventListener('click', () => {
        // Code to handle pasting from clipboard goes here
        text.focus();
    });
    
    }*/

    const handlepaste = async () => {
      try {
        const clipboardData = await navigator.clipboard.readText();
        setText(clipboardData);
      } catch (error) {
        console.error('Failed to read clipboard:', error);
      }
    };
  //   let currentSpeechInstance;
  //  const handleread =  () =>{
  //   const speech = new SpeechSynthesisUtterance();
  //   speech.text = text; // Set the text to be spoken from the state
     //speech.lang = 'en'; // Set language to Russian

  //   const voices = window.speechSynthesis.getVoices();
  //   const femaleVoices = voices.filter(voice => voice.lang.startsWith('en') && voice.gender === 'female');

  //   if (femaleVoices.length >= 0) {
  //     speech.voice = femaleVoices[0];
  // } else {
  //     console.error('No female voices available for English. ');
  // }
 // document.getElementById("myBox").style.voiceFamily = "female";

  //   window.speechSynthesis.speak(speech);

  //   currentSpeechInstance = speech.text; // Store the reference to the current speech instance
    
  //   console.error('No speech instance to pause.');
  //  document.getElementById("pause").style.opacity= 1;

//   if (currentSpeechInstance) {
//     window.speechSynthesis.cancel(currentSpeechInstance); // Stop any ongoing speech
//   }

//    try {
//      window.speechSynthesis.speak(speech);
//      currentSpeechInstance = speech.text; // Store reference
//     document.getElementById("pause").style.opacity = 1;
//    } catch (error) {
//      console.error('Error:', error); // Log errors for troubleshooting
//    }
  
//    }
//    const [pause, setPause] = useState("Pause speech");
//      const handlepause = () =>{
//       if (currentSpeechInstance || window.speechSynthesis.resumed) {
//          window.speechSynthesis.pause(currentSpeechInstance);
//          setPause("Resume speech");
//      } else if (window.speechSynthesis.paused){
//       window.speechSynthesis.resume(currentSpeechInstance);
//       setPause("Pause speech");
//      }
     
//      else {
//          console.error('No speech instance to pause.');
//          document.getElementById("pause").style.opacity= 0;
//     }


     
//  }

    const handleChange = (event) =>{
      
      
      setText(event.target.value);

    }
    
  return (
    <>
    <Speech/>
        <div className="container mb-3" style={{color: props.mode==='light'?'black':'white'}}> 
        <label htmlFor="myBox" className="form-label"><h1>
            {props.heading}</h1></label>
        <textarea className="form-control my-3" id="myBox" value={text} rows="7" 
        onChange={handleChange} 
        style={{backgroundColor: props.mode==='light'?'white':'grey',
         color: props.mode==='light'?'black':'white'}}>
          {props.text}</textarea>
        
        
        
          <button className="btn btn-primary mx-1 my-1" type="button" onClick={handleup}>UpperCase</button>
          <input className="btn btn-primary mx-1 my-1" type="button" value="LowerCase" onClick={handlelow}/>
          <input className="btn btn-primary mx-2 my-1" type="reset" value="Clear" onClick={handleclear} />
          <button className="btn btn-primary mx-1 my-1" type="button" onClick={handlecopy}>Copy Text</button>
          <button className="btn btn-primary mx-1 my-1" type="button" onClick={handlespaces}>clear extra spaces</button>
          <button className="btn btn-primary mx-1 my-1"  type="button" onClick={handlepaste}>paste text</button>
          <button className="btn btn-primary mx-1 my-1"  type="button" onClick={handleread}>read text</button>
            <button className="btn btn-primary mx-1 my-1" id="pause" type="button" onClick={handlepause}
          style={{opacity: 0 }}>{props.pause}</button>  
     
          </div>
          <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Summary </h1>
            <p>{text.split(" ").filter((element)=> { return element.length!==0}).length} word and {text.length } charchter</p>
            <p>{0.008 * text.split(" ").filter((element)=> { return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"write some text in above box to preview"}</p>

          </div>
    </>
  );
}
