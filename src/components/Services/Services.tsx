import style from './Services.module.css';

const Services = () => {
    return(
        <div className={style.services}>
            <div className={style.content}>
                <div className={style.contentService}>
                    <h1 className={style.title}>Services</h1>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet ipsum ut dolores. Sed dolor sit ea sed takimata gubergren diam 
                        sea aliquyam sadipscing dolor diam et amet ut lorem. Duis facilisi id nibh vero invidunt
                    </p>
                </div>
                <div className={style.contentIcons}>
                    <div className={style.subcontentIcon}>
                    <span className= {`${style.icon} material-symbols-outlined`}>public</span>
                    <label>Lorem ipsum dolor sit amet</label>
                    </div>
                    <div className={style.subcontentIcon}>
                    <span className= {`${style.icon} material-symbols-outlined`}>support_agent</span>
                    <label>Ex duo erat nulla</label>
                    </div>
                    <div className={style.subcontentIcon}>
                    <span className= {`${style.icon} material-symbols-outlined`}>medical_services</span>
                    <label>Aliquyam rebum sit vel</label>
                    </div>
                    <div className={style.subcontentIcon}>
                    <span className= {`${style.icon} material-symbols-outlined`}>currency_exchange</span>
                    <label> No tempor rebum dolore</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;