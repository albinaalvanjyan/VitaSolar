import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import s from './Header.module.scss'

function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${s.header_content} container`}>
                <div className="logo"><img src="./logo.png" alt="" /></div>
                <nav>
                    <NavLink to="/" className={({ isActive }) => isActive ? s.active : ""}>Home</NavLink>
                    <NavLink to="/"  onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>
                        About Us
                    </NavLink>
                    <NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection("solar-kits"); }}>
                        Solar Kits
                    </NavLink>
                    <NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection("calculator"); }}>
                        Calculator
                    </NavLink>
                    <NavLink to="/" onClick={(e) => { e.preventDefault(); scrollToSection("our-works"); }}>
                        Our Works
                    </NavLink>

                </nav>
                <Button text="Call Us" backgroundColor={`var(--yellow)`} color={`var(--grey)`} />
            </div>
        </header>
    )
}

export default Header