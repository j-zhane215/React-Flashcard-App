import React, { useState } from "react"

export const Register = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(name + email + password)
    }
    return(
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Create an Account</h2>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder="John Smith" id="name" name="name" />
            <label htmlFor="email">Email Address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@email.com" type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value) }placeholder="**********" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log In Here.</button>
        </div>
    )
}