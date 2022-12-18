//  NPM
import {Link} from "react-router-dom"
//  CSS
import "./header.css"

export const Header = () => {
    
    const toggleMenu = () => {
        const nav = document.querySelector(".nav")
        nav.classList.toggle("active")
    }

    return(
        <header>
            <nav>
                <Link to="/home" className="header-link-logo">
                    <img src={require("../../../images/logo.png")} alt="logo" className="header-logo" />
                    <div>
                        <h1>IPAM</h1>
                        <small>Amazônia</small>
                    </div>
                </Link>
                <div className="nav">
                    <button className="btn-mobile" onClick={toggleMenu}>
                        <span className="hamburger"></span>
                    </button>
                    <ul className="menu">
                        <li><Link to="/home" className="header-link">Home</Link></li>
                        <li><Link to="/search" className="header-link">Search</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}