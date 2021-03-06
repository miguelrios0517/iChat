import './App.css';
import TextInput from './TextInput';
import Message from './message.js'
import { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([{text:'hello'}]);
  return (
    <div className="App">
      <header className = "header">
        <div className = "logo"></div>
        iChat
      </header> 

      <main className = "messages">
        {messages.map((m,i)=> {
          return <Message key {...i} {...m} />
        })}

      </main>

      {/*This is a custom tag with a send function passed in as props*/}
      <TextInput
        send={(t)=> setMessages([...messages, {text:t}])}
      />
      
    </div>
  );
}

export default App;
