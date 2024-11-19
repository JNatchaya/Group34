import './log-out-style.css';
import { clearToken } from '../init';

function Logout({ setToggleLogout, setToken }) {
    const handleLogout = () => {
        clearToken(); // Remove token from localStorage
        setToken(''); // Update state in Init to trigger rerender
        setToggleLogout(false); // Close the logout dialog
        window.location.href = "#/"; // Redirect to login page
    };

    return ( 
        <div className="log-out-body">
            <div className="log-out-container">
                <div className="log-out-text-container">
                    <div className="log-out-text">Log out?</div>
                </div>
                <div className="btn-box">
                    <button className="confirm-btn" onClick={handleLogout}>Confirm</button>
                    <button className="cancel-btn" onClick={() => setToggleLogout(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Logout;
