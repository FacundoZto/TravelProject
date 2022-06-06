import style from './Web.module.css';

const Web = ():JSX.Element => {
    return(
        <div className={style.menu}>
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
    )
}

export default Web;