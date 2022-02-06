import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"
import axios from "axios";

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password,
            });
            // console.log(res);
            res.data && window.location.replace("/login");
        }
        catch (err) {
            // console.log(err); 
            setError(true);
        } 
    };

    return (
        <div className='register'>
            <span className="registerTitle"> Register</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label >Username</label>
                <input
                    type="text"
                    className='registerInput'
                    placeholder='Enter your Username'
                    onChange={e => setUsername(e.target.value)}
                />
                <label >Email</label>
                <input
                    type="text"
                    className='registerInput'
                    placeholder='Enter your Email'
                    onChange={e => setEmail(e.target.value)}
                />
                <label >Password</label>
                <input
                    type="password"
                    className='registerInput'
                    placeholder='Enter your Password'
                    onChange={e => setPassword(e.target.value)}
                />
                <button className='registerButton' type="submit">
                    Register
                </button>
                {error && <span style={{ color: "red" }}>User already exist, try to login!</span>}
            </form>
        </div> 
    )
}

