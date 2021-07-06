import React from 'react'
import { useState } from 'react';

const LoginBox = () => {
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
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
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" value={pwd} placeholder="Enter your password" onChange={(e) => setPwd(e.target.value)}/>
            </div>
            <a href="" style={{marginBottom:"20px", display:"block"}}>Forgot your password?</a>
            <input type="submit" value ="Submit" className="btn btn-block"/>
        </form>
    )
}

export default LoginBox
