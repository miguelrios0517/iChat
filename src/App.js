import './App.css';
import TextInput from './TextInput';
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([{text:'hello'}]);
  return (
    <div className="App">
      <header class = "header">
        <div class = "logo"></div>
        iChat
      </header> 
      <div className = "message">
        {messages[0].text}
      </div>

      {/*This is a custom tag with a send function passed in as props*/}
      <TextInput
        send={(t)=> setMessages([{text:t}])}
      />
      
    </div>
  );
}

export default App;
