'use client'

import compliance from '../assets/compliance.jpg'
import whatsapp from '../assets/whatsapp.png'
import styles from './styles.module.css'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { header } from '../utility/header'
import Footer from './components/footer/Footer'

const Home = () =>
{
    const sectionRef = useRef(null); 
    const [ show, setShow ] = useState(false);

    const handleScroll = () =>
    {
        if(sectionRef.current)
            sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <div className={styles.container}>
          <div className={styles.heroImage}>
            <Image className={styles.heroImage} src={compliance} alt='img' priority={true} />
          </div>

          <div className={styles.header}>
            <h1 className={styles.heading}>{header.heading1}<p className={styles.activeHeading}>{header.heading2}</p>{header.heading3}</h1>
            <p className={styles.subheading}>{header.subheading}<span className={styles.explore} onClick={handleScroll}>Contact us</span></p>
          </div>

          <div className={styles.marquee}>
            <p className={styles.marqueeText}>Coming soon | New batches starting from 6th September | Get enrolled via whatsapp</p>
          </div>

          <a href='https://wa.me/918431976788' target='_blank'>
            {show && <p className={styles.text}>Click here to get enrolled</p>}
            <Image className={styles.whatsapp} src={whatsapp} alt='whatssapp' onMouseEnter={()=> setShow(true)} onMouseLeave={()=> setShow(false)}/>
          </a>

          <div ref={sectionRef}>
            <Footer/>
          </div>
        </div>
    )
}

export default Home

