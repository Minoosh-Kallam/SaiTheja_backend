import axios from 'axios';
import React, { useState } from 'react';


function Signup(props) {

    const [email , setEmail ] = useState('')
    const [userName , setUserName ] = useState('')
    const [mobile , setMobile ] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')

    const setState = (data , setData) => {
        setData(data) ;
    }

    const signup = () => {
        const payload = {
            email : email ,
            userName : userName ,
            mobile : mobile ,
            password : password ,
        }
        axios.post("http:localhost:8080/signup/" , payload)
            .then(res => console.log(res))
            .catch(err => console.log(err)) ;
    }
    return (
        <div>
            <input type='text' placeholder='Enter email' value = {email} onChange = {(e) => setState(e.target.value , setEmail)}/> <br/>

            <input type='text' placeholder='Enter username' value = {userName} onChange = {(e) => setState(e.target.value , setUserName)}/>   <br/> 

            <input type='text' placeholder='mobile number'  value={mobile}    onChange = {(e) => setState(e.target.value , setMobile)} /><br/>

            <input type='password' placeholder='Password' value={password} onChange = {(e) => setState(e.target.value , setPassword)} /><br/>

            <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange = {(e) => setState(e.target.value , setConfirmPassword)} /><br/>

            <button onClick ={() => signup()} >Submit</button>

        </div>
    );
}

export default Signup;