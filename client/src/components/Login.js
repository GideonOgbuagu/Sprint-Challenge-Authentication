import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"


const Login = (props) => {
const [login, setLogin] = useState({
    username: '',
    password: ''
})

const handleChange = e => {
    setLogin({
        ...login,
        [e.target.name]: e.target.value

    })
}


const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("/api/auth/login", login)
        .then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            props.history.push('/jokes');
           
        })
        .catch(err => console.log("From Login", err))
}

    return (
        <div className="form-container">
             <p className="signout-text3">Continue with your username and password</p>
            <form onSubmit={handleSubmit} className="form1" autoComplete="off">
                <input
                    type="text"
                    name="username"
                    value={login.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                />
                <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                />
                
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;
