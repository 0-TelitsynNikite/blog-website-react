import './topbar.css'
import { Link } from 'react-router-dom'

export default function TopBar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-vk"></i>
                <i className="topIcon fa-brands fa-youtube"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link to='/' className="topListItem">HOME</Link>
                    <Link to='/about' className="topListItem">ABOUT</Link>
                    <Link to='/contact' className="topListItem">CONTACT</Link>
                    <Link to='/write' className="topListItem">WRITE</Link>
                    {user && "LOGOUT"}
                </ul>
            </div>
            <div className="topRight">
                {user
                    ? <img
                        className="topImg"
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="top"
                    />
                    : (
                        <>
                            <Link to='/login' style={{backgroundColor: 'teal', borderRadius: '10px', padding: '5px', color: 'white'}} className='topListItem'>LOGIN</Link>
                            <Link to='/register' style={{backgroundColor: 'lightblue', borderRadius: '10px', padding: '5px', color: 'white'}} className='topListItem'>REGISTER</Link>
                        </>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
