import React from 'react'
import s from './Button.module.scss'
const Button = ({text, backgroundColor, color}) => {
  return (
    <button className={s.button} style={{backgroundColor: backgroundColor, color: color}}>{text}</button>
  )
}

export default Button