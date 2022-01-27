import React from 'react';
import Link from 'next/link'
import Navbar from '../styles/Navbar';

const Nav = (props) => {
    return (
        <div className='nav'>
            <Navbar className='navBar'>
                <Link href='/'><h1 id='logo'>WaffleTech</h1></Link>
                <ul className="links">
                    <Link href='/design' ><li href='/design' className="navlink">Design & Development</li></Link>
                    <Link href='/marketing' ><li href='/marketing' className="navlink">Digital Marketing</li></Link>
                    <Link href='/seo' ><li href='/seo' className="navlink">SEO</li></Link>
                    <Link href='/branding' ><li href='/branding' className="navlink">Branding</li></Link>
                    <Link href='/contact' ><li href='/contact' className="navlink">Contact Us</li></Link>
                </ul>
                <div className='hamburger-container'>
                    <div className='hamburger'>
                        V
                        <ul id='hidden-list'>
                        <Link href='/contact' ><li href='/contact' className="navlink">Design & Development</li></Link>
                        <Link href='/contact' ><li href='/contact' className="navlink">Digital Marketing</li></Link>
                        <Link href='/contact' ><li href='/contact' className="navlink">SEO</li></Link>
                        <Link href='/contact' ><li href='/contact' className="navlink">Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
            </Navbar>
        </div>
    )
};

export default Nav;