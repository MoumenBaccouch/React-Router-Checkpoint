import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const Navigate=useNavigate()
  return (
    <div> <div class="login-container">
    <div class="login-form">
      <h1>Login</h1>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required></input>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required></input>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div></div>
  )
}

export default Login