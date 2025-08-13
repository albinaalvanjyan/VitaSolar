import React from 'react'
import s from './OurWorks.module.scss'
import { useState, useRef, useEffect } from 'react';
import SectionAnimation from '../SectionAnimation/SectionAnimation';

const slides = ["slide1.png", "slide2.png", "slide3.png"];

const OurWorks = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <SectionAnimation id="our-works" className={s.section}>
            <div className={`${s.content} container`}>
                <SectionAnimation direction="left" delay={0} className={s.texts}>
                    <img src="./quote.png" alt="" />
                    <h2 className="h2">Our Works</h2>
                    <p className="p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quod dolorem! Sunt nihil quaerat quasi? Excepturi soluta culpa ipsam, repellendus architecto rerum accusamus nam cum, corporis et, maxime consectetur molestias!
                    </p>
                </SectionAnimation>
                <SectionAnimation direction="right" delay={100} className={s.slider}>
                    {slides.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Slide ${i + 1}`}
                            className={i === current ? s.active : s.inactive}
                        />
                    ))}
                </SectionAnimation>
            </div>
        </SectionAnimation>

    )
}

export default OurWorks