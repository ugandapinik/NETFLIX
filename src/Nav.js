import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import "./Nav.css"

function Nav() {

    const [show, setShow] = useState(false)
    const history = useHistory()
    

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
                    src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                    alt="Netflix Logo"
                    onClick={() => history.push('/')} />


                <img
                    className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="Netflix Avatar"
                    onClick={() => history.push('/profile')} />
            </div>
        </div>
    )
}

export default Nav
