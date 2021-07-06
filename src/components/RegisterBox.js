import React from 'react'
import { useState } from 'react';

const RegisterBox = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [Cpwd, setCpwd] = useState("");
    const submitted = (e) =>{
        e.preventDefault();
        alert("No database yet!!!");
    }
    return (
        <form className= "" style={{}} onSubmit={submitted}>
            <div className='form-control'>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter your username" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter you email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" value={pwd} placeholder="Enter your password" onChange={(e) => setPwd(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="c">Confirm Password:</label>
                <input type="password" id="cpwd" value={Cpwd} placeholder="Re-enter your password" onChange={(e) => setCpwd(e.target.value)}/>
            </div>

            <input type="submit" value ="Submit" className="btn btn-block"/>
        </form>
    )
}

export default RegisterBox
