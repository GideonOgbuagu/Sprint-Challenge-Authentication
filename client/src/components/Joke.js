import React from 'react'

const User = (props) => {
    return (
        <div className="user">
            <p className="user-header">"{props.joke.joke}"</p>
        </div>
    )
}

export default User;