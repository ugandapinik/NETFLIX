import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img
                    className="loginScreen__logo"
                    src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png" 
                    alt="Netflix Logo" />


                <button className="loginScreen__button">Sign In</button>

                <div className="loginScreen__gradient"></div>
            </div>



            <div className="loginScreen__body">
                <>
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel at any time.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                    <div className="loginScreen_input">
                        <input 
                            />
                    </div>
                </>
            </div>
        </div>
    )
}


//
export default LoginScreen
