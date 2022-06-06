import style from './card.module.css';

const Card = () => {
    return(
        <div className={style.card}>
            <h3 className={style.title}>Lorem ipsum dolor sit amet</h3>
            <ul className={style.list}>
                <li className={style.itemList}><strong className={style.letter}>E</strong>psum sanctus clita no soluta.</li>
                <li className={style.itemList}><strong className={style.letter}>V</strong>ero dolore ex dolor vel magna diam ut nibh.</li>
                <li className={style.itemList}><strong className={style.letter}>A</strong>met augue tempor et kasd sadipscing.</li>
                <li className={style.itemList}><strong className={style.letter}>A</strong>ccusam ut elit.</li>
            </ul>
        </div>
    )
}

export default Card;