import React from 'react';
import { motion } from 'framer-motion';

const svgVarients = {
    hidden: {
        rotate: -180
    },
    visible: {
        rotate: 0,
        transition: {
            duration: 1
        }


    }
}

const Header = () => {
    return (
        <div className='header' id="header">
            <div className='container-fluid'>
                <div className='content d-flex ' >
                    <motion.div className='logo'
                        variants={svgVarients}
                        initial='hidden'
                        animate='visible'
                    >
                        <img src={require('../imgs/logo.jpg')} alt="pizza logo" />
                    </motion.div>
                    <motion.h3 className='header-title'
                        initial={{ y: -250 }}
                        animate={{ y: 0 }}
                        transition={{ delay: .2, type: 'spring', stiffness: 120 }}
                    >
                        pizaa joint
                        </motion.h3>
                </div>
            </div>

        </div>
    );
}

export default Header;
