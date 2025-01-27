import logo from '../../images/cognitive-control_17435564.png'
import {NavLink} from "react-router-dom";
import "./Header.css"


function Header() {


    return (
        <header className="Header">
            <img src={logo} alt="logo"/>

            <nav className="HeaderNav">
                <ul className="HeaderList">
                    <li className="HeaderNavLink">
                        <NavLink to="/">Product</NavLink>
                    </li>
                    <li className="HeaderNavLink">
                        <NavLink to="/adress">Adress</NavLink>
                    </li>
                    <li className="HeaderNavLink">
                        <NavLink to="/basket">Basket</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header