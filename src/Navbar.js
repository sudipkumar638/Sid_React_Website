import React from 'react'
import "./navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = ({ toggle, value }) => {
    return (
        <div className='navContainer'>
            <div className='navbar'>
                <MenuIcon className='toggleButton' onClick={() => { toggle(!value) }}></MenuIcon>

                <div className='logo'>
                    <img src='https://www.stoaktechnologies.com/wp-content/uploads/2016/11/black-background-with-logo.jpg' height={50} width={50}></img>
                    <p>Homyz</p>
                </div>

                <div className='menusContainer'>
                    <div className='menus'>
                        <ul>
                            <li>Recidencies</li>
                            <li>Our Values</li>
                            <li>Contact Us</li>
                            <li>Get Started</li>
                            <li>
                                <button>Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar