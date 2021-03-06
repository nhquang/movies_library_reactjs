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
        <div className="dashboard" style={{width:"100%", height:"65.2vh"}}>
            <div style={{marginTop:"100px", width:"12%", marginLeft:"15%", textAlign:"center"}}>
                <h1>Dashboard</h1>
            </div>
            <table style={{marginTop:"70px",minWidth:"40%", textAlign:"left", marginLeft:"15%"}}>
                
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
