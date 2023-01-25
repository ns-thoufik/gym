import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from "react-scroll";

const Header = () => {
    const mobile = window.innerWidth<=786 ? true: false;
    const [menuOpened, setMenuOpened] = useState(false)
    return (
        <div className="header">
           <img className='logo' src={Logo} alt="" />
           {menuOpened === false && mobile === true ? ( 
            <div 
            style={{
                backgroundColor: 'var(--appColor)',
                padding: '0.5rem',
                borderRadius: '5px',
            }}
            onClick={()=> setMenuOpened(true)}
            ><img src={Bars} alt=""  style={{width: '5rem', height: '1.5rem'}}/>
            </div>
           ) : (
            <ul className='header-menu'>
            <li onClick={()=>setMenuOpened(false)}><Link 
            to='header'
            span={true}
            smooth={true}>Home</Link></li>
            <li onClick={()=>setMenuOpened(false)}><Link 
            to='programs'
            span={true}
            smooth={true}>Program</Link></li>
            <li onClick={()=>setMenuOpened(false)}><Link 
            to='reasons'
            span={true}
            smooth={true}>Why us</Link></li>
            <li onClick={()=>setMenuOpened(false)}><Link 
            to='plans'
            span={true}
            smooth={true}>Plans</Link></li>
            <li onClick={()=>setMenuOpened(false)}><Link 
            to='testimonials'
            span={true}
            smooth={true}
            >testimonials</Link></li>
           </ul>
           )
           }

          
        </div>
    )
}

export default Header