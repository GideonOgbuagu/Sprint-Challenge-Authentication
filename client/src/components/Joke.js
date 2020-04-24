import React from 'react'

const User = (props) => {
    return (
        <div className="user">
            <h2 className="user-header">{props.joke.joke}</h2>
        </div>
    )
}

export default User;