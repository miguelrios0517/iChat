import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker'
import {db, useDB} from './db'
import { BrowserRouter, Route, Switch } from "react-router-dom";


export default function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path ="/" component={App} />
    </Switch>
  </BrowserRouter>
}


function App(props) {
  console.log(props)
  //const room = props.match.params.room || 'home'
  //console.log("CHAT ROOM", room)


  const messages = useDB()
  //const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
    )

  // use this to validate values 
  /* 
  React.useEffect(() => {
    if (messages.length >= 1 ){
      console.log(messages)
   }
  });*/

  return (
    <div className="App">
      <header className = "header">
        <div className = "logo"></div>
        iChat
        <NamePicker saveName = {setUsername}/>
      </header> 

      <main className = "messages">
        {messages.map((msg,i)=> {
          const isMe = msg.name===username
          return <Message key={i} {...msg} isMe={isMe}/>
        })}

      </main>

      {/*This is a custom tag with a send function passed in as props*/}
      <TextInput
        //accessed by TextInput as props.send
        send={(t)=> {
            db.send({text:t, name:username, date: new Date()})
            console.log(messages)
          }} 
        
        //send={(t)=> db.send({text:t, name:username, date: new Date()})} 
      />
      
    </div>
  );
}


