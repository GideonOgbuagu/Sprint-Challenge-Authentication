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

            <p className="signout-text1">Thank you for visiting us!</p>
            <p className="signout-text2">You have been successfully Logged out!</p>
            
        </div>
    )
}

export default Logout;
