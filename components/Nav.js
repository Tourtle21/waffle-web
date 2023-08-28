import React, { useState } from 'react';
import Link from 'next/link'
import Navbar from '../styles/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Nav = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <div className='nav'>
            <Navbar className='navBar'>
                <div className="logo">
                    <div className="boxes">
                        <div className="box" id="box1"></div>
                        <div className="box" id="box2"></div>
                        <div className="box" id="box3"></div>
                        <div className="box" id="box4"></div>
                        <div className="box" id="box5"></div>
                    </div>
                <div className="logo-box">
                    <Link href='/'><Image id="logo" layout="fill" src='/images/wafflelogo-black.png' /></Link>
                </div>
                </div>
                <ul className="links">
                    <Link href='/design' ><li href='/design' id="link1" className="navlink">Design</li></Link>
                    <Link href='/development' ><li href='/development' id="link2" className="navlink">Development</li></Link>
                    <Link href='/branding' ><li href='/branding' id="link3" className="navlink">Branding</li></Link>
                    <Link href='/contact' ><li href='/contact' id="link4" className="navlink">Contact Us</li></Link>
                </ul>
                <Link href='/contact' ><li href='/contact' id="link4" className="navlink hidden-link">Contact Us</li></Link>

                <div className='hamburger-container' onClick={() => setIsOpen(!isOpen)}>
                    <div className='hamburger'> 
                        <div className='hamburger-line'></div>
                        <div className='hamburger-line'></div>
                        <div className='hamburger-line'></div>
                    </div>
                </div>
                <ul id="hidden-list" style={{height: isOpen ? "110px" : "0"}}>
                    <li onClick={() => {setIsOpen(false); router.push('/design');}}  className="navlink">Design</li>
                    <li onClick={() => {setIsOpen(false); router.push('/development');}}  className="navlink">Development</li>
                    <li onClick={() => {setIsOpen(false); router.push('/branding');}}  className="navlink">Branding</li>
                </ul>
            </Navbar>
        </div>
    )
};

export default Nav;