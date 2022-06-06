import style from './About.module.css';
import image from '../../assets/about.jpg';

const About = () => {
    return(
        <div className={style.about}>
            <div className={style.content}>
                <div className={style.bar}></div>
                <img src={image} className={style.img} alt='img' />
                <div className={style.info}>
                    <h1 className={style.title} >About Us</h1>
                    <h1 className={style.subtitle}>We Help Businesses</h1>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet ipsum ut dolores. Sed dolor sit ea sed takimata gubergren diam 
                        sea aliquyam sadipscing dolor diam et amet ut lorem. Duis facilisi id nibh vero invidunt 
                        sit ullamcorper iusto ullamcorper volutpat nonummy ad elitr sed dolore dolor laoreet duis. 
                        Justo sed consetetur diam justo. Diam amet est eos iriure et rebum dolore et erat nam sit 
                        kasd rebum et.
                    </p>
                    <button className={style.btn}>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default About;