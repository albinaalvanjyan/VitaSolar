import React from 'react'
import SectionAnimation from '../SectionAnimation/SectionAnimation'
import s from './AboutUs.module.scss'

const AboutUs = () => {
    return (
        <SectionAnimation id="about" className={s.section}>
        <div className={`container ${s.section_content}`}>
     
          <SectionAnimation direction="left" delay={0}>
            <h2 className="h2">About Us</h2>
            <p className="p">At Solidarity Solar our aims are to help our customers towards a sustainable future and genuinely care about the quality of products we use for our installs. We never sell you equipment you don't need and will always advise to the best of our ability, No hard sell or pushy sales tactics ever. We take pride in our work and do our best to make sure that we meet, or exceed, our customers' expectations.</p>
            <ul>
              <li><span>01 /</span> Collaborate with 100+ leading</li>
              <li><span>02 /</span> 100+ leading universities and companies</li>
              <li><span>03 /</span> leading universities and companies</li>
              <li><span>04 /</span> universities and companies</li>
            </ul>
          </SectionAnimation>
      

          <SectionAnimation direction="right" className={s.productimg} delay={200}>
            <img src="./panelimg1.JPG" alt="Product Image" />
          </SectionAnimation>
        </div>
      </SectionAnimation>
    )
}

export default AboutUs