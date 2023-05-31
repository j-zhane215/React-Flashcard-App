import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(email)
    }
    return(
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Welcome! Log In</h2>
            <label htmlFor="email">Email Address</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@email.com" type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value) }placeholder="**********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register Here.</button>
        </div>
    )
}