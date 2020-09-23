import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",//animate children after finesh prent
            staggerChildren: 0.5

        }
    },
    exit: {
        x: '-100vW',
        transition: {
            ease: 'easeInOut'
        }
    }
}
const childrenVarients = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}


const Order = ({ pizza, setShowModal }) => {
    const [showTitle, setShowTitle] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowModal(true)
        }, 5000);
    }, [setShowModal])


    // setTimeout(() => {
    //     setShowTitle(false);
    // }, 4000);

    return (
        <motion.div className='order'
            variants={containerVarients}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='container-fluid'>
                <div className='content ' >
                    {/* <AnimatePresence>
                        {showTitle && (
                            <motion.h3
                                exit={{ y: -1000 }}
                            >
                                thank you for your order :)
                            </motion.h3>)}
                    </AnimatePresence> */}
                    {showTitle && (
                        <h3

                        >
                            thank you for your order :)
                        </h3>)}
                    <motion.p className='order-title'
                        variants={childrenVarients}
                    >you orderd a {pizza.base && (pizza.base)} pizza with:
                    </motion.p>
                    {
                        pizza.toppings.map(item => {
                            return (
                                <motion.div className='item'
                                    variants={childrenVarients}
                                    className='topping-item' key={item}>{item}
                                </motion.div>
                            )
                        })
                    }

                </div>
            </div>
        </motion.div>
    )
}

export default Order;
