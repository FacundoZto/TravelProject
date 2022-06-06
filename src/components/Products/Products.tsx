import style from './Products.module.css';
import Card from './Card';

const Products = () => {
    return(
        <div className={style.products}>
            <div className={style.content}>
                <div className={style.divText}>
                    <h1 className={style.title}>Products</h1>
                    <p className={style.text}>Diam amet est eos iriure et rebum</p>
                </div>
                <div className={style.cards}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Products;