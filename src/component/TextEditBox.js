import React, {useState} from "react";

export default function TextEditBox(props) {
    const [text , setText] = useState("");
    
    
    const handlespaces = () =>{
      const newText = text.split(/\s+/);   // can use split(/[ ]+/)
      setText(newText.join(' '));
      props.displayAlert("Extra Spaces has been Romoved. ", "Successfully");
    }
    /*const handlespaces = () => {
      const newText = text.split(/\s or [ ]+/)..filter(word => word !== '')join(' '); // Remove spaces and empty strings
      setText(newText);
  }*/
  

    const handleup = () =>{
      //console.log ("uppercase was clicked" + text);
       let newText = text.toUpperCase();
      setText(newText); 
      props.displayAlert("Text is converted to UpperCase.", "Successfully");
    }

    const capitalizedText = (text) => {
      // Split the text into sentences
      let sentences = text.split(/(?<=[.?!]) /);
  
      // Iterate through each sentence
      let result = sentences.map(sentence => {
          // Split the sentence into words
          let words = sentence.split(' ');
          // Capitalize the first letter of the first word and convert the rest to lowercase
          let capitalizedSentence = words.map((word, index) => {
              if (index === 0) {
                  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
              } else {
                  return word.toLowerCase();
              }
          }).join(' ');
          return capitalizedSentence;
      }).join(' '); // Join sentences back with a period
  
      // Add the final period after the last sentence
      result += '';
      
      return result;
      

  }

  let handleCap = () =>{
    let newText = capitalizedText(text);
    setText(newText);
  };


    const handlelow = () =>{
      let newText = text.toLowerCase();
      setText(newText);
      props.displayAlert("Text converted to LowerCase.", "Successfully"); 
    }

    const handleclear = () =>{
      let newText = "";
      setText(newText); 
      if (currentSpeechInstance || window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel(currentSpeechInstance); // Stop any ongoing speech
        
      }
      document.getElementById("resume").style.display = "none";
      document.getElementById("pause").style.display = "none";
      props.displayAlert("Text is cleared.", "Successfully");
    }

    const handlecopy = () => {
      navigator.clipboard.writeText(text); 
     
     props.displayAlert("Copied to Clipboard.", "Successfully");
  }

   /* const handlecopy = (event) =>{
      let text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(text.value);
    }*/

    
    const handlepaste = async () => {
      try {
        const clipboardData = await navigator.clipboard.readText();
        setText(clipboardData);
      } catch (error) {
        console.error('Failed to read clipboard:', error);
      }
      props.displayAlert("Text has been pasted.", "Successfully");
    };
    /* let currentSpeechInstance = null;
    
     let initialSelection = null; */
const [currentSpeechInstance , setCurrentSpeechInstance] = useState(null);
const [initialSelection , setInitialSelection] = useState(null);

   const handleread =  () =>{
    const speech = new SpeechSynthesisUtterance();
    
 //   const voices = window.speechSynthesis.getVoices();
 //   const femaleVoices = voices.filter(voice => voice.lang.startsWith('en') && voice.gender === 'female');

 //   if (femaleVoices.length >= 0) {
 //     speech.voice = femaleVoices[0];
 // } else {
 //     console.error('No female voices available for English. ');
 // }
// document.getElementById("myBox").style.voiceFamily = "female";


 /*  const selection = window.getSelection(); // Get current selection
 const selectedText = selection.toString().trim(); */
 //setInitialSelection(selectedText); // Extract and trim text
 const texta = document.getElementById("myBox");
 const selectionStart = texta.selectionStart;
const selectionEnd = texta.selectionEnd;
const selection = texta.value.substring(selectionStart, selectionEnd);
const selectedText = selection.trim();

 if (currentSpeechInstance || window.speechSynthesis.resumed || window.speechSynthesis.speaking) {
   window.speechSynthesis.cancel(currentSpeechInstance); // Stop any ongoing speech

   document.getElementById("resume").style.display = "none";
 }

 
   try {
     if (selectedText && initialSelection !== selectedText) {
       // If there is selected text and it's different from the previous selection, speak it
       speech.text = selectedText;
       setInitialSelection( selectedText); // Update the initial selection
   } else {
       // If there is no selected text or it's the same as the previous selection, speak the entire text content
       speech.text = text;
      //  initialSelection = selectedText; // Reset the initial selection
   }
     window.speechSynthesis.speak(speech);
     setCurrentSpeechInstance(speech); // Store reference
    document.getElementById("pause").style.display = "inline";
  } catch (error) {
    console.error('Error:', error); // Log errors for troubleshooting
   }
 
   
     
 
   speech.onend = () => {
    document.getElementById("pause").style.display = "none"; // Hide pause button when speech ends
    /* initialSelection = null;
    currentSpeechInstance = null;
    console.log(initialSelection);
        console.log(speech.text); */

}
     props.displayAlert("Read Aloud is activated.", "Successfully");

  } 

  
    const handlePause = () =>{
      if (currentSpeechInstance || window.speechSynthesis.speaking || window.speechSynthesis.resumed){
        window.speechSynthesis.pause(currentSpeechInstance);
        document.getElementById('resume').style.display = "inline";
        document.getElementById("pause").style.display = "none";
      } else {
        console.log("no speech started");
        document.getElementById("pause").style.display = "none";
      }
      props.displayAlert("Read Aloud has been Paused.", "Successfully");
  
      
    }

    const handleResume = () =>{
      if(window.speechSynthesis.paused){
        window.speechSynthesis.resume(currentSpeechInstance);
        document.getElementById('resume').style.display = "none";
        document.getElementById("pause").style.display = "inline";

      }
      props.displayAlert("Read Aloud has been Resumed.", "Successfully");
    }

    const handleChange = (event) =>{
      
      
      setText(event.target.value);

    }
    
  return (
    <>
   
        <div className="container mb-3" style={{color: props.mode==='light'?'black':'white'}}> 
        <label htmlFor="myBox" className="form-label"><h1>
            {props.heading}</h1></label>
        <textarea className="form-control my-3" id="myBox" value={text} rows="7" 
        onChange={handleChange} 
        style={{backgroundColor: props.mode==='light'?'white':'#15467f',
         color: props.mode==='light'?'black':'white'}}
         autoFocus>
          {props.text}</textarea>
        
        
        
          <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" type="button" onClick={handleup}>UpperCase</button>
          <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" type="button" onClick={handleCap}>Capitalize First letter</button>
          
          <input disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" type="button" value="LowerCase" onClick={handlelow}/>
          <input disabled = {text.length ===0}  className="btn btn-primary mx-2 my-1" type="reset" value="Clear" onClick={handleclear} />
          <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" type="button" onClick={handlecopy}>Copy Text</button>
          <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" type="button" onClick={handlespaces}>Remove Extra Spaces</button>
          <button  className="btn btn-primary mx-1 my-1"  type="button" onClick={handlepaste}>Paste Text</button>
          <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1"  type="button" onClick={handleread}>Read Aloud</button>
          <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" id="pause" type="button" onClick={handlePause}
          style={{display: "none" }}>Pause</button>
          <button disabled = {text.length ===0} className="btn btn-primary mx-1 my-1" id="resume" type="button" onClick={handleResume}
          style={{display: "none" }}>Resume</button>  
     
          </div>
          <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <h1>Summary </h1>
            <p>{text.split(/\s+/).filter((element => 
              element.trim().length)).length} words and {text.length } characters with spaces and {text.replace(/\s+/g, '').length} characters without spaces</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=> 
              { return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothings to  preview"}</p>

          </div>
    </>
  );
}
