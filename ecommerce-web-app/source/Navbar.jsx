import {useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Navbar() {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const linkClass= ({isActive}) => 
        `mr-3 inline-flex items-center px-2 py-1 transition-all duration-200 ${
            isActive 
            ? "font-bold text-blue-600" 
            : "font-medium text-gray-600 hover:text-blue-500"
        }`;

    const handleLogout= () => {
        logout();
        navigate('/login');
    };
    
    return (
        <nav className="flex items-center justify-between bg-white px-4 py-3 shadow-sm">
            <div className="flex items-center">
                <NavLink to="/" className={({isActive}) => `${linkClass({isActive})}`} end>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => `${linkClass({isActive})}`} end>About</NavLink>
                <NavLink to="/contact" className={({isActive}) => `${linkClass({isActive})}`} end>Contact</NavLink>
                <NavLink to="/products" className={({isActive}) => `${linkClass({isActive})}`} end>Products</NavLink>
                {isLoggedIn ?(
                    <button
                        onClick={handleLogout}
                        className="rounded-full bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                        >
                        Logout
                    </button>
                ) : (
                        <NavLink to="/login" className={({isActive}) => `${linkClass({isActive})}`} end>Login</NavLink>
                )}
            </div>
        </nav>
    );
}
