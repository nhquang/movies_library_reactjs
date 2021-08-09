import React from 'react'
import { useState } from 'react';
import Cookies from 'universal-cookie'
import { useHistory } from "react-router-dom";

const LoginBox = ({setLoggedIn, handleCloseLogin}) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const submitted = async (e) =>{
        e.preventDefault();
        if(name.trim() === "" || pwd.trim() === "") alert("Username or password missing!");
        else{
            const res = await fetch("https://movies-night-back.herokuapp.com/auth",
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({username: name, password: pwd})
                }
            );
            if(res.status != 202){
                alert("Username or password incorrect!");
            }
            else{
                const parsed = await res.json();
                const cookies = new Cookies();
                setPwd("");
                setName("");
                handleCloseLogin();
                
                cookies.set("token", parsed.jwt, { path: '/' });
                setLoggedIn();
                history.push("/dashboard");
            }
        }
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
