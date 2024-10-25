import style from "./Home.module.css";
import data from "../data/images.js";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import { wrap } from "popmotion";

const Home = (): JSX.Element => {
  //Cada página
  //const [[page, direction], setPage] = useState([0, 0]);
  //Paginado infinito
  //const imageIndex = wrap(0, data.length, page);
  
  const [page, setPage] = useState(0); // Estado para la página actual de la imagen
  const imageIndex = page % data.length; // Asegura que el índice esté dentro del rango de `data`
  const direction = 1;
   // Función para cambiar al siguiente índice
   const paginate = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      paginate(); // Cambia al siguiente índice cada 3 segundos
    }, 5000);

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar
  }, []);

 /*  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }; */

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className={style.home}>
      <div className={style.containerdata}>
        <div className={style.data}>
          <h1 className={style.title}>{data[imageIndex].title}</h1>
          <h5 className={style.phrase}>{data[imageIndex].phrase}</h5>
        </div>

        <div className={style.buttons}>
          <button className={style.readBtn}>Read more</button>
          {/* <motion.button
            className={style.prev}
            whileHover={{ scale: 1.2, opacity: 1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
          >
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </motion.button> */}
          {/* <motion.button
            className={style.next}
            whileHover={{ scale: 1.2, opacity: 1, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
          >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </motion.button> */}
        </div>
      </div>

      <div className={style.containerimg}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className={style.item}
            key={page}
            src={data[imageIndex].img}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 150, damping: 25 },
              opacity: { duration: 0.5 },
              scale: { type: "spring", stiffness: 200, damping: 20 },
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
