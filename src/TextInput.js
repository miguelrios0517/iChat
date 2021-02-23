import {useState} from 'react';

function TextInput(props) {
    const [text, setText] = useState('') //may pass default value like useState('default value')
    //text is the variable that is going to be set/updated
    //setText is the function that sets the text
    function sendMessage() {
        if(text==='') return //skip the function 
        props.send(text)
        setText('')
    }
    
    function keyPressed(e) {
        if(e.key==='Enter') {
            sendMessage()
        }

    }


    return <footer className = "text-input">
        <input 
            placeholder = "Write your message"
            value = {text}
            onChange={e=> setText(e.target.value)}
            onKeyPress = {keyPressed}
        />
        <button onClick = {keyPressed} disabled = {!text}>
            send
        </button>
    </footer>

}

export default TextInput