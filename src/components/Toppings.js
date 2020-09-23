import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Toppings = ({ pizza, addToppings, styleObj }) => {
    const [toppings, setToppings] = useState(['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'])
    const containerVarients = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            trnsition: {
                type: 'spring',
                stiffness: 120

            }
        },
        exit: {
            x: '-100vW',
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    const nextVarients = {
        hidden: {
            opacity: 0,
            x: '-100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            trnsition: {
                type: 'spring',
                delay: .5

            }
        },
        hover: {
            scale: 1.1,
            textShadow: "0px 0px 8px rgba(255,255,255)",
            boxShadow: "0px 0px 8px rgba(255,255,255)",
            transition: {
                duration: 0.3,
                yoyo: 10

            }

        }
    }
    return (
        <motion.div className='toppings'
            variants={containerVarients}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='container-fluid'>
                <div className='content d-flex flex-column justify-content-center align-items-center' style={styleObj} >
                    <div className='topping-items'>
                        <h3 className="title">step 2: choose Toppings</h3>
                        <ul className='list'>
                            {toppings.map(item => {
                                let itemClass = pizza.toppings.includes(item) ? 'active' : '';
                                return (
                                    <motion.li key={item} onClick={() => addToppings(item)} className={itemClass}
                                        whileHover={{
                                            scale: 1.3,
                                            color: '#f8e112',
                                            originX: 0
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300
                                        }}
                                    ><span>{item}</span></motion.li>
                                )
                            })}

                        </ul>
                        {

                            pizza.toppings.length > 0 && (


                                <NavLink to='/order'>
                                    <motion.button
                                        variants={nextVarients}
                                        whileHover='hover'
                                        className='btn'
                                    >
                                        Order
                                        </motion.button>
                                </NavLink>

                            )

                        }



                    </div>




                </div>

            </div>

        </motion.div>
    );
}

export default Toppings;
