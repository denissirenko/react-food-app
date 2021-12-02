import { Link } from "react-router-dom";

export const Header = () => {
    return <nav className="green darken-1">
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">React Food</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link 
                        to='about'
                        >
                            about
                    </Link>
                </li>
                <li>
                    <Link 
                        to='contact'
                        >
                            contact
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
}