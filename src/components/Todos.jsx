import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { motion, useDragControls } from 'framer-motion'


function Todos({ title, status, size, reference }) {
    return (
        <div className='card-wrapper p-8'>
            <motion.div
                drag
                dragConstraints={reference}
                dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }}
                whileDrag={{ scale: 1.1 }}
                dragElastic={0.1}
                className='text-white cursor-grab p-8 rounded-[45px] bg-black w-52 h-60 relative overflow-hidden'>
                <FaRegFileAlt />
                <p className='my-4'>{title}
                </p>
                <div className='flex justify-between'>
                    <span>{size}mb</span>
                    <MdCancel />
                </div>
                <div className={`${status ? 'bg-green-500' : 'bg-blue-500'} absolute left-0 bottom-0 p-2 w-full text-lg text-center`} >
                    <p>Download Now</p></div>
            </motion.div>
        </div>
    )
}

export default Todos