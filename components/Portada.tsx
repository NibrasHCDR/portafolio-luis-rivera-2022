import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
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
    <div>
         <AnimacionPortada1 />
        <h1>
            <span>{text}</span>
           <Cursor cursorColor="colores_app-four" />
        </h1>
        
    </div>
  )
}