import style from './Mobile.module.css';

interface Props{
    state: boolean;
    setState: (value: boolean) => void;
}

const Mobile = ({state, setState}:Props) => {
    return(
        <div className={style.menu}>
            <div className={style.close} >
                <span 
                onClick={() => setState(!state)}
                className="material-symbols-outlined" 
                id={style.mobileClose}
                >close</span>
            </div>
            <div className={style.menuOptions}>
                <div className={style.option}>
                    <a href='#home'>Home</a>
                </div>
                <div className={style.option}>
                    <a href='#about'>About</a>
                </div>
                <div className={style.option}>
                    <a href='#services'>Services</a>
                </div>
                <div className={style.option}>
                    <a href='#Products'>Products</a>
                </div>
                <div className={style.option}>
                    <a href='#Details'>Details</a>
                </div>
                <div className={style.option}>
                    <a href='#Contact'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Mobile;