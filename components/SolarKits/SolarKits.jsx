import React from 'react'
import SectionAnimation from '../SectionAnimation/SectionAnimation'
import s from './SolarKits.module.scss'
const SolarKits = () => {
    return (
        <SectionAnimation id="solar-kits" className={s.section}>
            <div className='container'>
                <h2 className='h2'>Solar Kits</h2>
                <p className='p'>Complete solar system kits, ready for installation. They  can be used to supplement on-grid housing, a complete self-sustaining home or some combination of the two.</p>
                <div className={s.grid_block}>

                    <SectionAnimation direction="left" delay={0}>
                        <div className={s.items}>
                            <div className={s.img}>
                                <img src="./gridimg1.png" alt="" />
                            </div>
                            <div className={s.content}>
                                <h3>Off Grid</h3>
                                <p className='p'>WOC has contributed to students ...</p>
                                <button>View Products <i className='bx bx-right-arrow-alt'></i></button>
                            </div>
                        </div>
                    </SectionAnimation>


                    <SectionAnimation direction="bottom" delay={100}>
                        <div className={s.items}>
                            <div className={s.img}>
                                <img src="./gridimg2.png" alt="" />
                            </div>
                            <div className={s.content}>
                                <h3>On Grid</h3>
                                <p className='p'>WOC has contributed to students ...</p>
                                <button>View Products <i className='bx bx-right-arrow-alt'></i></button>
                            </div>
                        </div>
                    </SectionAnimation>

                    <SectionAnimation direction="right" delay={200}>
                        <div className={s.items}>
                            <div className={s.img}>
                                <img src="./gridimg3.png" alt="" />
                            </div>
                            <div className={s.content}>
                                <h3>Hybrid</h3>
                                <p className='p'>WOC has contributed to students ...</p>
                                <button>View Products <i className='bx bx-right-arrow-alt'></i></button>
                            </div>
                        </div>
                    </SectionAnimation>
                </div>

            </div>
        </SectionAnimation>
    )
}

export default SolarKits