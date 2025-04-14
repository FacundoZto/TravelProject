import style from './About.module.css';
import image from '../../assets/about.jpg';

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.content}>
                <div className={style.bar}></div>
                <img src={image} className={style.img} alt='img' />
                <div className={style.info}>
                    <h1 className={style.title} >About Us</h1>
                    <h1 className={style.subtitle}>Get ready to experience</h1>
                    <p className={style.text}>
                        With over two decades of experience in the sector, we are your trusted team for designing tailor-made trips and unforgettable group experiences. In our commitment to providing exceptional service, we prioritize personalized advice and meticulous attention to every detail.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;