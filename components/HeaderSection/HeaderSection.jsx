import React from 'react'
import Button from '../../components/Button/Button'
import SectionAnimation from '../SectionAnimation/SectionAnimation'
import TextTyping from '../TextTyping/TextTyping'
import s from './HeaderSection.module.scss'
const HeaderSection = () => {
    return (
        <SectionAnimation className={s.header_section}>
            <div className="container">
                <TextTyping/>
                <p>Fueled is an award-winning technology consultancy that transforms <br></br> businesses by generating ideas, building products, and accelerating growth.</p>
                <div className={s.btns}>
                    <Button backgroundColor="var(--light-green)" text="Call Us Today" color="white" />
                    <Button backgroundColor="var(--yellow)" text="Requst a call back" color="var(--grey)" />
                </div>
            </div>
        </SectionAnimation>
    )
}

export default HeaderSection