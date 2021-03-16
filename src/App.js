import './App.css';
import TextInput from './TextInput.js';
import Message from './message.js'
import NamePicker from './NamePicker.js'
import { useState } from 'react';


function App() {
  const [messages, setMessages] = useState([{text:'hello'}]);
  const [username, setUsername] = useState('')

  return (
    <div className="App">
      <header className = "header">
        <div className = "header-left"> <div className = "logo"></div>
        iChat</div>
        <div className = "header-right"><NamePicker saveName = {setUsername}/></div>
      </header> 

      <main className = "messages">
        {messages.map((msg,i)=> {
          return <Message key={i} {...msg} />
        })}

      </main>

      {/*This is a custom tag with a send function passed in as props*/}
      <TextInput
        send={(t)=> setMessages([...messages, {text:t, name:username, date:new Date()}])} 
      />
      
    </div>
  );
}

export default App;
