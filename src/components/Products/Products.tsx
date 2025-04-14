import style from './Products.module.css';
import Card from './Card';

const destinations = [
    {
        id: 1,
        country: 'Brasil',
        cities: ['Rio de Janeiro', 'São Paulo', 'Salvador', 'Belo Horizonte'],
    },
    {
        id: 2,
        country: 'Argentina',
        cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
    },
    {
        id: 3,
        country: 'Chile',
        cities: ['Santiago', 'Valparaíso', 'Concepción', 'La Serena'],
    },
    {
        id: 4,
        country: 'Colombia',
        cities: ['Bogotá', 'Medellín', 'Cartagena', 'Cali'],
    },
]

const Products = () => {
    return(
        <div className={style.products}>
            <div className={style.content}>
                <div className={style.divText}>
                    <h1 className={style.title}>Destinations</h1>
                </div>
                <div className={style.cards}>
                    {destinations.map((item) => (
                        <Card key={item.id} country={item.country} cities={item.cities} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;