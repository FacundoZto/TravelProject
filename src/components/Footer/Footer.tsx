import style from './footer.module.css';
import {Link} from 'react-scroll';

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.div1}>
                <h3>Moondo</h3>
            </div>
            <div className={style.div2}>
                <Link
                to="home" 
                spy={true} 
                smooth={true} 
                offset={0} 
                duration={550}
                className={style.link} 
                >Home</Link>
                <Link
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >About</Link>
                <Link
                to="services" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >Services</Link>
                <Link
                to="products" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >Destinations</Link>
                <Link
                to="details" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >Details</Link>
                <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={0} 
                duration={550}
                className={style.link}
                >Contact</Link>
            </div>
            
        </div>
    )
}

export default Footer;