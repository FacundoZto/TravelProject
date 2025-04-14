import style from './Details.module.css';

const Details = () => {
    return (
        <div className={style.details}>
            <div className={style.content}>
                <div className={style.divContent}>
                    <h2 className={style.title}>More details</h2>
                    <p className={style.text}>
                        Every traveler is unique. That’s why we offer a range of services designed to create a completely personalized travel experience. Whether it’s a family vacation, a romantic getaway, or an adventure trip, we have the right package for you.
                    </p>
                </div>

                <div className={style.secondDiv}>
                    <div className={style.list}>
                        <div className={style.detail}>
                            <span className={`${style.icon} material-symbols-outlined`}>explore</span>
                            <label>
                            Expert planning tailored to your personal interests and schedule.
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className={`${style.icon} material-symbols-outlined`}>explore</span>
                            <label>
                            Seamless arrangements to ensure a stress-free travel experience
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className={`${style.icon} material-symbols-outlined`}>explore</span>
                            <label>
                            Immersive activities that allow you to experience destinations like a local.
                            </label>
                        </div>
                    </div>
                    <div className={style.list}>
                        <div className={style.detail}>
                            <span className={`${style.icon} material-symbols-outlined`}>explore</span>
                            <label>
                            Our team is always ready to assist you throughout your journey.
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className={`${style.icon} material-symbols-outlined`}>explore</span>
                            <label>
                            Customized travel solutions for families, events, and business trips.
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className={`${style.icon} material-symbols-outlined`}>explore</span>
                            <label>
                            Peace of mind with comprehensive coverage options tailored to your needs.
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;