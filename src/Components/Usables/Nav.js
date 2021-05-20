import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Styles/Navbar'

const Nav = (props) => {
    return (
        <header>
            <div className='nav'>
                <Navbar>
                    <Link to='/'><div className="logo">WaffleTech</div></Link>
                    <ul className="links">
                        <Link to='/contact'><li>Contact Us</li></Link>
                    </ul>
                </Navbar>  
            </div>
        </header>

    )
};

export default Nav;