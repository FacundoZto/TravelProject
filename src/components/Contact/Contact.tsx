import style from './Contact.module.css';
import contact from '../../assets/contact.jpg';

const Contact = () => {
    return(
        <div className={style.contact}>
            <div className={style.content}>
                <div className={style.divContent}>
                    <h1 className={style.title}>Get in touch</h1>
                    <h1 className={style.subtitle}>Get your next travel</h1>
                    <form className={style.form}>
                        <div className={style.inputContainer}>
                            <input
                            type="text"
                            placeholder='Name'
                            required
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <input
                            type="email"
                            placeholder='Email'
                            required
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <input
                            type="tel"
                            placeholder='Phone'
                            required
                            />
                        </div>
                        <div className={style.inputContainer}>
                            <textarea 
                            placeholder='Message'
                            maxLength={256}
                            required
                            ></textarea>
                        </div>
                       
                        <button className={style.btn}>Send</button>
                    </form>
                </div>
                <img className={style.image} src={contact} alt='img-contact' />
            </div>
        </div>
    )
}

export default Contact;