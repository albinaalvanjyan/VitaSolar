import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import s from './Header.module.scss'
import { useState } from 'react';
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const handleClick = (id) => {
        setActiveLink(id);
        scrollToSection(id);
        history.pushState(null, "", `#${id}`);
        setOpen(false);
    };

    return (
        <header className={s.header}>
            <div className={`${s.header_content} container`}>
                <div className="logo"><img src="./logo.png" alt="" /></div>
                <div className={s.custom_menu}>
                    <nav>
                        <a className={activeLink === "home" ? s.active : ""} onClick={() => handleClick("home")}>Home</a>
                        <a className={activeLink === "about" ? s.active : ""} onClick={() => handleClick("about")}>About Us</a>
                        <a className={activeLink === "solar-kits" ? s.active : ""} onClick={() => handleClick("solar-kits")}>Solar Kits</a>
                        <a className={activeLink === "calculator" ? s.active : ""} onClick={() => handleClick("calculator")}>Calculator</a>
                        <a className={activeLink === "our-works" ? s.active : ""} onClick={() => handleClick("our-works")}>Our Works</a>
                    </nav>
                    <Button text="Call Us" backgroundColor={`var(--yellow)`} color={`var(--grey)`} />
                </div>
                <div className={s.mobile_menu}>
                    <div className={s.menu} onClick={() => setOpen(!open)}>
                        {!open ? <i className='bx bx-menu'></i> : <i className='bx bx-x'></i>}
                    </div>
                    <div className={`${s.menu_content} ${open ? s.active : ""}`}>
                    <nav>
                        <a className={activeLink === "home" ? s.active : ""} onClick={() =>{ handleClick("home"); setOpen(false)}}>Home</a>
                        <a className={activeLink === "about" ? s.active : ""} onClick={() => {handleClick("about"); setOpen(false)}}>About Us</a>
                        <a className={activeLink === "solar-kits" ? s.active : ""} onClick={() => {handleClick("solar-kits"); setOpen(false)}}>Solar Kits</a>
                        <a className={activeLink === "calculator" ? s.active : ""} onClick={() => {handleClick("calculator"); setOpen(false)}}>Calculator</a>
                        <a className={activeLink === "our-works" ? s.active : ""} onClick={() => {handleClick("our-works"), setOpen(false)}}>Our Works</a>
                    </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header