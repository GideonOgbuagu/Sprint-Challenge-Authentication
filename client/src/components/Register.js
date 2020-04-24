import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth"


const Register = (props) => {
const [register, setRegister] = useState({
    username: '',
    password: ''
})

const handleChange = e => {
    setRegister({
        ...register,
        [e.target.name]: e.target.value

    })
}


const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("/api/auth/register", register)
        .then(res => {
        //    console.log(res.data)
            localStorage.setItem('token', res.data.token)
            props.history.push('/login');
           
        })
        .catch(err => console.log("From Register", err))
}

    return (
        <div className="form-container">
            {/* <p>Welcome</p> */}
            <form onSubmit={handleSubmit} className="form2" autoComplete="off">
                <input
                    type="text"
                    name="username"
                    value={register.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                />
                <input
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                />
             
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;
