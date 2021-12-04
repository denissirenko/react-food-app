import { Link } from "react-router-dom";

export const Header = () => {
    return <nav className="green darken-1">
        <div className="container">
            <Link to="/" className="brand-logo">Recipes</Link>
        </div>
    </nav>
}