import style from './Header.module.css';
import {useState} from 'react';
import Web from './Web/Web';
import Mobile from './Mobile/Mobile';
import {motion, useViewportScroll, useTransform} from 'framer-motion';

const Header = () => {

    const [state, setState] = useState<boolean>(false);

    //-----Cambiar background del header-----
    const {scrollY} = useViewportScroll();
    const background = useTransform(scrollY, [0.1, 1], ['transparent', 'rgb(224, 117, 47, 0.9)']);
    //-------------

    return(
        <motion.div 
        className={style.header}
        style={{backgroundColor: background}}
        >
            <div className={style.title}>
                Company
            </div>
            <div className={style.menu}>
                <div className={style.web}>
                    <Web/>
                </div>
                <div className={style.mobile}>
                    {
                    state ? <Mobile state={state} setState={setState} /> :
                    <div onClick={() => setState(!state)}>
                        <span className="material-symbols-outlined" id={style.mobileMenu}>menu</span>
                    </div>
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Header;