import React, { useEffect } from 'react'

const Signout = () => {

    const signedOut = () => {
        localStorage.clear()
    }
    
    useEffect(() => {
        signedOut()
    }, []);

    return (
        <div className="signout">

            <h1 className="signout-text1">Thank you for visiting our site!</h1>
            <p className="signout-text2">You have been successfully Logged out!</p>
            
        </div>
    )
}

export default Signout;
