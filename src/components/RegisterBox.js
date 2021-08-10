
import React from 'react'
import { useState } from 'react';

const RegisterBox = () => {
    const [name, setName] = useState("");
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [Cpwd, setCpwd] = useState("");
    const submitted = async (e) => {
        e.preventDefault();
        if(pwd !== Cpwd) alert("Confirm password does not match password!");
        else{
            const res = await fetch("https://movies-night-back.herokuapp.com/users",
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({firstName: fname, lastName: lname, email: email, username: name, password:pwd})
                }
            );
            if(res.status != 202){
                const text = await res.text();
                alert(text);
            }
            else{
                alert("Succeeded!");
                setName("");
                setFName("");
                setLName("");
                setPwd("");
                setCpwd("");
                setEmail("");
            }
        }   
    }
    return (
        <form className= "" style={{}} onSubmit={submitted}>
            <div className='form-control'>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" placeholder="Enter your first name" value={fname} onChange={(e) => setFName(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" placeholder="Enter your last name" value={lname} onChange={(e) => setLName(e.target.value)}/>
            </div>
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
                <label htmlFor="cpwd">Confirm Password:</label>
                <input type="password" id="cpwd" value={Cpwd} placeholder="Re-enter your password" onChange={(e) => setCpwd(e.target.value)}/>
            </div>

            <input type="submit" value ="Submit" className="btn btn-block"/>
        </form>
    )
}

export default RegisterBox
