import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

let Header = () => {
    let [userInOut, setUserInOut] = useState('Login');
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <button className="user_in_out" onClick={() => {
                userInOut === 'Login'? setUserInOut('Logout') : setUserInOut('Login');
            }}>{userInOut}</button>
            <div className="nav">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/address">Address</Link>
                <div>Cart</div>
            </div>
        </div>
    )
};

export default Header;