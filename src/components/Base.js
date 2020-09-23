import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Base = ({ addBase, pizza }) => {
    console.log(pizza);


    const [base, setBase] = useState(['classic', 'Thin & crispy', 'thick crust']);
    const [baseSelecte, setBaseselecte] = useState('');

    const containerVarients = {
        hidden: {
            opacity: 0,
            x: '100vw'
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                delay: .5,
                when: "beforeChildren"
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
            transition: {
                type: 'spring',
                stiffness: 120

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

        <motion.div className='base'
            variants={containerVarients}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='container-fluid'>
                {

                    //console.log('rerender', counter)
                }
                <div className='content d-flex flex-column justify-content-center align-items-center' >
                    <div className='base-items'>
                        <h3 className="title">step 1: choose your Base</h3>
                        <ul className='list'>
                            {base.map(item => {
                                let itemClass = pizza.base === item ? 'active' : '';
                                return (
                                    <motion.li key={item} className={itemClass} onClick={() => addBase(item)}
                                        whileHover={{
                                            scale: 1.3,
                                            color: '#f8e112',
                                            originX: 0
                                        }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 300
                                        }}
                                    >

                                        <span>{item}</span>
                                    </motion.li>

                                )
                            })}

                        </ul>

                        {
                            pizza.base && (

                                <NavLink to='/toppings'  >
                                <motion.button className='btn'
                                   
                                    variants={
                                        nextVarients
                                    }
                                    whileHover='hover'>
                                   
                                        nex
                                   
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

export default Base;
