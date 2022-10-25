import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Portada from '../components/Portada'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <motion.div 
    initial={{
      x: -100,
      y: 0,
      opacity: 1,
      scale: 0.05,
     }}
     animate={{
       x: [0, 0, 0],
       y: 0,
       opacity: 1,
       scale: 1,
      }}
      transition={{
          duration: 1.0,
      }}
    
    className="bg-colores_app-primary text-colores_app-four h-screen snap-mandatory overflow-scroll
    z-0">
      <Head>
        <title>Ing. Luis Rivera Araya | XplenDev</title>
      </Head>

      <Header />
       
       <section id="portada" className="snap-center">
       <Portada/>
       </section>
      

    </motion.div>
  )
}

export default Home
