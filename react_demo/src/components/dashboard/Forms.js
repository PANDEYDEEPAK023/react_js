import { useRef } from "react";

function Forms() {
    const formRef= useRef();

    const submitForm = (e) => {
        e.preventDefault();
        formRef.current.email.focus();
        console.log('form submitted', formRef.current.email.value);

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={submitForm} ref={formRef}>
                <label className="px-2">Email</label>
                <input type="email" name="email" defaultValue="deepak@yopmail.com" className="mb-2" /><br />
                <label className="px-2">password</label>
                <input type="password" defaultValue="1234567" /><br />
                <button type="submit" className="mt-2 text-center">Submit</button>
            </form>
        </div>
    );
}

export default Forms;