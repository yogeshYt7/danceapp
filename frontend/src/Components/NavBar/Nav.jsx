import React from 'react'
import STYLE from "./nav.module.css"
import { Link } from 'react-router-dom'

const Nav = () => {
    let useremail = sessionStorage.getItem("useremail")
    let token = sessionStorage.getItem("token")
    let role = sessionStorage.getItem("role")
    return (
        <nav>
            <div className={STYLE.logoblock}>
                {useremail ? useremail : "LOGOBLOCK"}
            </div>
            <div className={STYLE.menublock}>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    {role === "ROLE_ADMIN" && (
                        <li>
                            <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                    )}
                    <li>
                        {token ?
                            <Link onClick={() => {
                                window.sessionStorage.clear()
                                window.location.assign("/login")
                            }}>Logout</Link>
                            :
                            <Link to={"/login"}>login</Link>
                        }
                    </li>
                    <li>
                        {token ? <></> : <Link to={"/register"}>Register</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
