import { useEffect } from "react";

function LoginMessage({ isLoggedIn, setLoggedIn }) {
    console.log('again');


    return (
        <>
            <button onClick={() => setLoggedIn(prev => !prev)}>check</button>
            <h1>{isLoggedIn ? 'Logged IN ' : 'Logged Out'}</h1>
        </>

    )
}

export default LoginMessage;