import { reverse } from 'dns';
import { motion } from 'framer-motion';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import AnimacionCubo1 from './AnimacionCubo1';
import AnimacionPortada1 from './AnimacionPortada1';

type Props = {}

export default function Portada({}: Props) {
   const [text, count] = useTypewriter({
    words: [
        "Hola Soy Nibras",
        "XplenDev",
    ],
    loop: true,
    delaySpeed: 3400,
   });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden">

      <AnimacionCubo1 />

      <AnimacionPortada1 />


        <h1>
            <span>{text}</span>
           <Cursor cursorColor="colores_app-four" />
        </h1>
        
    </div>
  )
}