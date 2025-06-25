import { useEffect, useState } from "react";
import LoginMessage from "./LoginMessage";


function ToggleText() {
    const [name, setName] = useState('Hello');
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <>
            {console.log('chchchchchch')}
            <button onClick={() => setName('Goodbye')}>{name}</button>
            <LoginMessage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}></LoginMessage>
        </>
    )

}

export default ToggleText;