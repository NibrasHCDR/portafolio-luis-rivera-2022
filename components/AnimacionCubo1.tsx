import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function AnimacionCubo1({}: Props) {
  return (
    
     <motion.div
      animate={{
         rotate: 360,
         
        }}
        transition={{
          duration: 4,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
      }}
      id="animacion1"
      className="sm:w-52 sm:mb-1"
      >

      </motion.div>
  )
}

export default AnimacionCubo1