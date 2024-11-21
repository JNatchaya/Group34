import './log-out-style.css';
import "../../index.css"
import { clearToken } from '../../init';

function Logout({ setToggleLogout, setToken }) {
    const handleLogout = () => {
        clearToken(); // Remove token from localStorage
        setToken(''); // Update state in Init to trigger rerender
        setToggleLogout(false); // Close the logout dialog
        window.location.href = "#/"; // Redirect to login page
    };

    return ( 
            <div className="log-out-container">
                    <button className="confirm-btn" onClick={handleLogout}>Log Out</button>
            </div>
    );
}

export default Logout;
