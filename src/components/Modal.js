import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVarients = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

const modalVarients = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '100px',
        opacity: 1,
        transition: {
            delay: 0.5

        }
    }

}


const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {
                showModal && (
                    <motion.div className='backdrop'
                        variants={backdropVarients}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'

                    >
                        <motion.div className='modal-item'
                            variants={modalVarients}
                        >
                            <p>want to make another pizza?</p>
                            <Link to='/'>
                                <button onClick={() => setShowModal(false)}>
                                    start again
                                </button>
                            </Link>

                        </motion.div>

                    </motion.div>
                )
            }

        </AnimatePresence>
    );
}

export default Modal;
