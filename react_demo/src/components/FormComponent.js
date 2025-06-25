import { useState } from "react";

function FormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const [error, setFormError] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        if (formData.name === '' || formData.email === '') {
            isValid = false
        }
        console.log('teststst', isValid)
        if (!isValid) return;

        console.log('finally')

    }

    console.log('asasas', formData);


    return (
        <form onSubmit={handleSubmit}>
            <input className="mb-2" type="text" name="name" onChange={handleChange} />
            <br />
            <input className="mb-2" type="email" name="email" onChange={handleChange} />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormComponent;