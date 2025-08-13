import React from 'react'
import s from './TextTyping.module.scss'
const TextTyping = ({ text = "Solar Panel Installers In Plymouth", interval = 150 }) => {
    return (
        <div className={s.animtext}>{text.split("")
            .map((el, i) => el===" " ? <span style={{ animationDelay: `${(i-1) * interval}ms` }}
                key={i}>
                {el}
            </span>
            :<span style={{ animationDelay: `${i * interval}ms` }}
                key={i}>
                {el}
            </span>)}
        </div>
    )
}

export default TextTyping