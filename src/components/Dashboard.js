import React from 'react'
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import { useState, useEffect } from 'react'

function Dashboard() {
    
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const fetchUser = async () =>{
            const cookies = new Cookies();
            const decoded = jwt_decode(cookies.get("token"));
            const res = await fetch(`https://movies-night-back.herokuapp.com/users/user?username=${decoded.sub}`, {method: "GET", headers:{"Authorization" : `Bearer ${cookies.get("token")}`}});
            if(res.status == 200){
                const parsed = await res.json();
                setFName(prev => parsed.firstName);
                setLName(prev => parsed.lastName);
                setEmail(prev => parsed.email);
                setUsername(prev => parsed.username);
            }
            else alert("Failed to retrieve!");
        };
        fetchUser();
    }, [])

    return (
        <div className="dashboard" style={{width:"75%", margin:"auto", marginTop:"100px", display:"flex",justifyContent:"center"}}>
            
            <table style={{width:"80%", textAlign:"center"}}>
                <caption style={{fontSize:"40px"}}>Dashboard</caption>
                <tr>
                    <td>First name:</td>
                    <td>{fname}</td>
                </tr>
                <tr>
                    <td>Last name:</td>
                    <td >{lname}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td>{username}</td>
                </tr>
                
            </table>
        </div>
    )
}

export default Dashboard
