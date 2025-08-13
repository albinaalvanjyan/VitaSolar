import React from 'react'
import s from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import SectionAnimation from './../SectionAnimation/SectionAnimation';

const Footer = () => {
    return (
        <SectionAnimation className={s.footer}>
            <div className="container">
                <div className='logo'><img src="./logo.png" alt="Logo" /></div>
                <div className={s.content}>
                    <nav>
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Calculator</a>
                        <a href="">Our Works</a>
                        <a href="">Solar Kits</a>

                    </nav>
                    <label>Get the freshest news from us
                        <div className={s.btn_input}>
                            <input type="email" placeholder='Your email address…' />
                            <Button backgroundColor="var(--yellow)" color="white" text="Subscribe" />
                        </div>
                    </label>
                </div>
            </div>
        </SectionAnimation>
    )
}

export default Footer