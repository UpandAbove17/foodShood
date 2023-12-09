import Title from "./Title";
import { useState } from "react";
import { Link } from "react-router-dom";


const loggedInUser = () => {
    //api call to check authentication

    return false;
}

const styleObj = {
    backgroundColor: "#d2dae2",
}

const Header = () => {

    const [isLoggedIn , setisLoggedIn] = useState(false);

    return (
        <div className="header" style={styleObj}>
            <Title />
            <div className="nav-items">
                <ul>
                        <li>
                            <Link to="/home">Home
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="/about">
                            About
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/contactUs">
                            Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                    Cart
                            </Link>
                        </li>

                </ul> 
            </div>
            {
                isLoggedIn ? 
                <button onClick={() => setisLoggedIn(false)}>LogOut</button> : 
                <button onClick={() => setisLoggedIn(true)}>LogIn</button>
            }
            
            

        </div>
    )
}
export default Header;