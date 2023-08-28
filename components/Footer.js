
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';


const Footer = (props) => {
    return (
        <footer>
           <div className="logo-footer-box">
                    <Link href='/'><Image id="logo" layout="fill" src='/images/wafflelogo-black.png' /></Link>
            </div>
        </footer>

    )
};

export default Footer;