import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className='registerInput' placeholder='Enter your username...' />
        <label>Email</label>
        <input type="text" className='registerInput' placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" className='registerInput' placeholder='Enter your password...' />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
      <Link to='/login' style={{backgroundColor: 'lightblue', borderRadius: '10px', padding: '10px 30px', color: 'white', marginTop: '15px'}}>Login</Link>
    </div>
  )
}
