import { isMatch } from "../DATA/user_info";  
import "./login.css";

function Login({ token, setToken }) {
  function confirmToken() {
    const u_input = document.querySelector('#username');
    const p_input = document.querySelector('#password');

    const user_info = isMatch(u_input.value, p_input.value);

    if (user_info) {
      setToken(user_info.token);
    }
  }

  return (
    <div className="login_container">
      <aside className="info-space">
        <div className="Logo"></div>
        <div className="info-text">
          <span className="h">More About Us</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium labore ex, quae tempore architecto sunt!
            Esse sit, perspiciatis eveniet tenetur explicabo culpa modi enim.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium labore ex, quae tempore architecto sunt!
            Esse sit, perspiciatis eveniet tenetur explicabo culpa modi enim.
          </p>
        </div>
      </aside>
      <aside className="login-space">
        <h2 className="login-space-header">LOGIN</h2>
        <div className="input-sec">
          <div className="form__group field">
            <input
              type="text"
              className="form__field"
              placeholder="Name"
              name="Username"
              id="username"
              required
            />
            <label className="form__label">
              <span className="bi bi-person-circle"></span> Username
            </label>
          </div>
          <div className="form__group field">
            <input
              type="password"
              className="form__field"
              placeholder="Name"
              name="Password"
              id="password"
              required
            />
            <label className="form__label">
              <span className="bi bi-key-fill"></span> Key
            </label>
          </div>

          <div className="sup-login">
          
          <div className="Losing">
            <label style={{ textDecoration: "underline", color:'white'}}>
              Losing The Key? <span className="bi bi-key-fill"></span>
            </label>
          </div>
        </div>


        </div>

        <div className="btn-sec">
          <button className="button btn-login" onClick={confirmToken}>
            Login
          </button>
          <button className="button btn-line">
            <span className="bi bi-line line-logo"></span>Login with line
          </button>
        </div>
      </aside>
    </div>
  );
}

export default Login;
