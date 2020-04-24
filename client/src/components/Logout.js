import React, { useEffect } from 'react'

const Logout = () => {

    const logOut = () => {
        localStorage.clear()
    }
    
    useEffect(() => {
        logOut()
    }, []);

    return (
        <div className="signout">

            <h1 className="signout-text1">Thank you for visiting us!</h1>
            <p className="signout-text2">You have been successfully Logged out!</p>
            
        </div>
    )
}

export default Logout;
