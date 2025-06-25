import { useRef } from "react";

function UseRef() {
    const name = useRef();
    const email = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(' name.current', name.current.value);

        // const fname = name.current.value;
        // const emails = email.current.value;
        // console.log('fname', fname, 'emails', emails);

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={name} />
            <input type="email" ref={email} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UseRef;