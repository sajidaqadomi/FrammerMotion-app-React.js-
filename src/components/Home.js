import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import Loader from './Loader';

const buttonVariants = {
    hover: {
        scale: 1.1,
        color: '#ffffff',
        textShadow: "0px 0px 8px rgba(255,255,255)",
        boxShadow: "0px 0px 8px rgba(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: 10

        }

    }
}
const containerVarients = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 1.5
        }
    },
    exit: {
        x: '-100vW',
        transition: {
            ease: 'easeInOut'
        }
    }
}

const Home = () => {

    return (
        <motion.div className='home' id='home'
            variants={containerVarients}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className='container-fluid'>
                <div className='content' id='home-content'>
                    <div className="home-items">
                        <h1 className='greeting' >welome to pizza joint</h1>
                        <NavLink to='/base' className='link'>
                            <motion.button className="btn btn-create"
                                variants={buttonVariants}
                                whileHover='hover'>
                                create your pizza</motion.button>
                        </NavLink>
                        {/* <Loader /> */}

                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;
