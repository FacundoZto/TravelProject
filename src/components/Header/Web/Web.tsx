import style from './Web.module.css';
import {Link} from 'react-scroll';

const Web = ():JSX.Element => {
    return(
        <div className={style.menu}>
            <div className={style.option}>
                <Link
                to="home" 
                spy={true} 
                smooth={true} 
                offset={0} 
                duration={550}
                className={style.link} 
                >Home</Link>
            </div>
            <div className={style.option}>
                <Link
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >About</Link>
            </div>
            <div className={style.option}>
                <Link
                to="services" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >Services</Link>
            </div>
            <div className={style.option}>
                <Link
                to="products" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >Products</Link>
            </div>
            <div className={style.option}>
                <Link
                to="details" 
                spy={true} 
                smooth={true} 
                offset={-96} 
                duration={550}
                className={style.link}
                >Details</Link>
            </div>
            <div className={style.option}>
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

export default Web;