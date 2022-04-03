import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className='loginInput' placeholder='Enter your email...' />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter your password...' />
            <button className="logginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
        <Link to='/register' style={{backgroundColor: 'lightblue', borderRadius: '10px', padding: '10px 30px', color: 'white', marginTop: '15px'}}>Register</Link>
    </div>
  )
}
