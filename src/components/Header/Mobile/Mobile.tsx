import style from './Mobile.module.css';
import {Link} from 'react-scroll';
import {motion} from 'framer-motion';

interface Props{
    state: boolean;
    setState: (value: boolean) => void;
}

const Mobile = ({state, setState}:Props) => {
    return(
        <motion.div 
        className={style.menu}
        initial={{x: 200, opacity: 0 }}
        animate={{x: 0, opacity: 1 }}
        transition={{
            duration: 0.5
        }}
        >
            <div className={style.close} >
                <span 
                onClick={() => setState(!state)}
                className="material-symbols-outlined" 
                id={style.mobileClose}
                >close</span>
            </div>
            <div className={style.menuOptions}>
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
        </motion.div>
    )
}

export default Mobile;