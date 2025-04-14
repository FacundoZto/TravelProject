import style from './Services.module.css';

const Services = () => {
    return (
        <div className={style.services}>
            <div className={style.content}>
                <div className={style.contentService}>
                    <h1 className={style.title}>Services</h1>
                    <p className={style.text}>
                        We work closely with you to understand your wants and needs, ensuring that each trip is unique and memorable.
                    </p>
                </div>
                <div className={style.contentIcons}>
                    <div className={style.subcontentIcon}>
                        <span className={`${style.icon} material-symbols-outlined`}>public</span>
                        <label>Full coverage</label>
                    </div>
                    <div className={style.subcontentIcon}>
                        <span className={`${style.icon} material-symbols-outlined`}>support_agent</span>
                        <label>Administrative support</label>
                    </div>
                    <div className={style.subcontentIcon}>
                        <span className={`${style.icon} material-symbols-outlined`}>medical_services</span>
                        <label>Health insurance</label>
                    </div>
                    <div className={style.subcontentIcon}>
                        <span className={`${style.icon} material-symbols-outlined`}>currency_exchange</span>
                        <label> Currency exchanges</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;