import React, {useState, useEffect} from 'react'
import "./Nav.css"

function Nav() {

    const [show, setShow] = useState(false)

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav_contents">
                <img 
                    className="nav__logo"
                    src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
                    alt="Netflix Logo" />


                <img
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix Avatar" />
            </div>
        </div>
    )
}

export default Nav
