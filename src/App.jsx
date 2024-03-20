import React, { useState } from 'react'
import 'regenerator-runtime/runtime'
import useClipboard from "react-use-clipboard";
import './App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const App = () => {
  
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN'});
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
    
     <div className='container'>
    
      <h2>Speech to text Coverter</h2>
     <br/>
     <p>React hook that converts speech from the microphone to text and make it available to you component</p>
     
     <div className='main-content' onClick={() => setTextToCopy(transcript)}>
     {transcript}
     </div>
  <div className='btn-style'>
  <button onClick={setCopied}>
       {isCopied ? 'Copied' : 'Copy to clipbord'}
    </button>
    <button onClick={startListening}>Start Listening</button>
    <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>


  </div>

     </div>
     
    </>
  )
}

export default App
