import style from './card.module.css';

interface CardProps {
    country: string;
    cities: string[];
}

const Card: React.FC<CardProps> = ({ country, cities }) => {
    return (
        <div className={style.card}>
            <h3 className={style.title}>{country}</h3>
            <ul className={style.list}>
                {
                    cities.map((city, index) => (
                        <li className={style.itemList} key={index}><strong className={style.letter}>•</strong>{city}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Card;