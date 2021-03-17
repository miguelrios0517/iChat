import './App.css'
import TextInput from './TextInput'
import Message from './message'
import NamePicker from './NamePicker'
import { useState } from 'react'
import {db, useDB} from '/db'


function App() {
  const messages = useDB()
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
        send={(t)=> db.send({text:t, name:username, date:new Date()})} 
      />
      
    </div>
  );
}

export default App;
