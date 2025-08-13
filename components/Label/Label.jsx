import React from "react";
import s from './Label.module.scss';

export default function Label({ label, value, onChange, ...props }) {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>{label}</label>
      <div className={s.rangeWrapper}>
        <input
          type="range"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          {...props}
          className={s.range}
        />
        <span className={s.value}>{value}</span> 
      </div>
    </div>
  );
}
