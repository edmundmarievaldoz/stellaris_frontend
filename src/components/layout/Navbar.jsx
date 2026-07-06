import './Navbar.scss';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (   
        <nav>
            <div className="navItem">
            <NavLink to="/">Home</NavLink>
            </div>
            
            <div className="navItem">
            <NavLink to="/apod">APOD</NavLink>
            </div>

            <div className="navItem">
            <NavLink to="/asteroids">Asteroids</NavLink>
            </div>

            <div className="navItem">
            <NavLink to="/mars">Mars</NavLink>
            </div>
            
        </nav>
    )
};

export default Navbar;