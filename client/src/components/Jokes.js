import React, { useState, useEffect } from 'react';
import Joke from './Joke'
import { axiosWithAuth } from "../utils/axiosWithAuth"
// import axios from "axios";

const Jokes = (props) => {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        const getJokesData = () => {
            axiosWithAuth()
            .get("/api/jokes/")
            .then(res => {
                console.log(res)
                setJokes(res.data)
            })
            .catch(err => {
                console.log("Something went wrong", err)
            })
        }

        getJokesData()
       
    }, [])
    //console.log(data)
    return (
        <div className="users">
            {/* <h1>Users DB</h1> */}
            <h3 className="users-text">Dad Jokes</h3>
            <div className="users-container">
                {jokes.map(joke => (
                    <Joke key={joke.id} joke={joke} />
                ))}
            </div>
        </div>
    )
}

export default Jokes;