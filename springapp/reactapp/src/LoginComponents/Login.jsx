import React, { useState } from 'react';
import axios from "axios" ;


function Login(props) {

    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')

    const setState = (data , setData) =>{
        setData(data);
    }

    const submitForm = () => {
        axios.post("http://localhist:8080/login" , {userName : userName , password : password})
            .then(res => console.log(res))
            .catch(err => console.log(err)) ;
    }

    return (
        <div>
            {/* <input type='text' placeholder='Enter email' value={userName} /><br/>
            <input type='password'placeholder='Enter Password' value={password} /><br/>

            <button onClick={() => submitForm()}></button> */}
        </div>
    );
}

export default Login;