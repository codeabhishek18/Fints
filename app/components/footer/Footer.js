import footer from './Footer.module.css'
import email from '@/assets/email.png'
import linkedin from '@/assets/linkedin.png'
import instagram from '@/assets/instagram.png'
import fints from '@/assets/fints.png'
import youtube from '@/assets/youtube.png'
import Image from 'next/image'

const Footer = () =>
{

    return(
        <div className={footer.container}>
            <Image className={footer.title} src={fints} alt='icon'/>
            <div className={footer.social}>
                <a href='https://www.linkedin.com/in/lokesh-naik-amltrustedsource/' target='_blank'>
                    <Image className={footer.icons} src={linkedin} alt='icon'/>
                </a>
                <a href='https://www.youtube.com/@camsbuild_lokesh' target='_blank'>
                    <Image className={footer.icons} src={youtube} alt='icon'/>
                </a>   
            </div>
            <div className={footer.contact}>
                <Image className={footer.icons} src={email} alt='icon'/>
                <p className={footer.description}>admin@fintsacademy.com</p>
            </div>
        </div>
    )
}

export default Footer
