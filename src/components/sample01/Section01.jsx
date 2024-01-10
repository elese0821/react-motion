import { motion } from 'framer-motion'
import React from 'react'

const Section01 = () => {
    return (
        <div>
            <section id='section01' className='react__item'>
                <span className='num'>01</span>
                <motion.div
                    className='circle'
                    animate={{
                        x: 300,
                        y: 300,
                        scale: 0.4,
                        borderRadius: 10,
                    }}
                ></motion.div>
            </section>
        </div>
    )
}

export default Section01