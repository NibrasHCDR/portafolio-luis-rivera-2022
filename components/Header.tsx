import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-colores_app-primary sticky top-10 p-5 flex items-start justify-between max-w-7xl mx-auto
    z-20 xl:items-center">
        {/* Retornamos nuestro Header y el Principal DIV contiene nuestros Iconos*/}
           <motion.div 
           initial={{
            x: -500,
            y: 250,
            opacity: 0,
            scale: 0.5,
           }}
           animate={{
             x: [0, 500, 0],
             y: 0,
             opacity: 1,
             scale: 1,
            }}
            transition={{
                duration: 1.5,
            }}
           
            className="flex flex-row items-center ">

            <SocialIcon
            className="cursor-pointer"
            url=""
            fgColor="#00A8CC"
            bgColor="transparent"
            />

            <SocialIcon
            className="cursor-pointer"
            url=""
            fgColor="#00A8CC"
            bgColor="transparent"
            />

           <SocialIcon
            className="cursor-pointer"
            url=""
            fgColor="#00A8CC"
            bgColor="transparent"
            />

            </motion.div>

            <motion.div 
            initial={{
                x: -500,
                y: 250,
                opacity: 0,
                scale: 0.5,
               }}
               animate={{
                 x: [0, -500, 0],
                 y: 0,
                 opacity: 1,
                 scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
            className=" flex flex-row items-center cursor-pointer">

            <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#00A8CC"
            bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-colores_app-four">Contactar</p>
            </motion.div>

            
    </header>
  )
}