import style from './Details.module.css';

const Details = () => {
    return(
        <div className={style.details}>
            <div className={style.content}>
                <div className={style.divContent}>
                    <h2 className={style.title}>More details</h2>
                    <p className={style.text}>Lorem ipsum dolor sit amet ipsum lorem est no justo voluptua
                     ut vel erat ipsum ut dolore. Dolores justo et at eirmod autem quis sed stet sed dolor
                      sit aliquyam clita duo. Eos molestie dolore doming lorem esse dolore suscipit clita 
                      sanctus esse. Et nihil iriure enim diam minim nonummy duo.
                    </p>
                </div>

                <div className={style.secondDiv}>
                    <div className={style.list}>
                        <div className={style.detail}>
                            <span className= {`${style.icon} material-symbols-outlined`}>info</span>
                            <label>
                                Lorem ipsum dolor sit amet tempor amet esse aliquyam aliquyam erat. 
                                Diam vero euismod odio et dolor quis nonumy vero tempor adipiscing
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className= {`${style.icon} material-symbols-outlined`}>settings</span>
                            <label>
                                Lorem ipsum dolor sit amet tempor amet esse aliquyam aliquyam erat. 
                                Diam vero euismod odio et dolor quis nonumy vero tempor adipiscing
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className= {`${style.icon} material-symbols-outlined`}>details</span>
                            <label>
                                Lorem ipsum dolor sit amet tempor amet esse aliquyam aliquyam erat. 
                                Diam vero euismod odio et dolor quis nonumy vero tempor adipiscing
                            </label>
                        </div>
                    </div>
                    <div className={style.list}>
                        <div className={style.detail}>
                            <span className= {`${style.icon} material-symbols-outlined`}>notifications</span>
                            <label>
                                Lorem ipsum dolor sit amet tempor amet esse aliquyam aliquyam erat. 
                                Diam vero euismod odio et dolor quis nonumy vero tempor adipiscing
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className= {`${style.icon} material-symbols-outlined`}>inventory_2</span>
                            <label>
                                Lorem ipsum dolor sit amet tempor amet esse aliquyam aliquyam erat. 
                                Diam vero euismod odio et dolor quis nonumy vero tempor adipiscing
                            </label>
                        </div>
                        <div className={style.detail}>
                            <span className= {`${style.icon} material-symbols-outlined`}>explore</span>
                            <label>
                                Lorem ipsum dolor sit amet tempor amet esse aliquyam aliquyam erat. 
                                Diam vero euismod odio et dolor quis nonumy vero tempor adipiscing
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;