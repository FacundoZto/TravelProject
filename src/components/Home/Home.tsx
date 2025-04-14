import style from "./Home.module.css";
import home from '../../assets/home.jpg';


const Home = (): JSX.Element => {

  return (
    <div className={style.home}>
      <img src={home} alt="Imagen de la Patagonia" className={style.img} />
    </div>
  );
};

export default Home;
