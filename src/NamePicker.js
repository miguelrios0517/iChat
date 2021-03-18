import{useState} from 'react'

function NamePicker(props) {
    const[showInput, setShowInput] = useState(false)
    const[username, setUsername] = useState(
        localStorage.getItem('username') || '')

    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('username', username);
    }

    if (showInput) {
        return <div className = "name-picker">
            <input value = {username}
                onChange = {e => setUsername(e.target.value)}
            />
            {/*If do not need any arguments can simply just call on the function name other wise (e) => save(e)*/}
            <button onClick = {save}>OK</button> 
        </div>
    }
    
    return <div className="name-picker">
        <div>{username}</div>
        <button onClick = {() => setShowInput(true)}>
            EDIT
        </button>
    </div>
}

export default NamePicker