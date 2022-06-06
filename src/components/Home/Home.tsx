import style from './Home.module.css';
import data from '../data/images.js';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const Home = ():JSX.Element => {

    //Cada página
    const [[page, direction], setPage] = useState([0, 0]);
    //Paginado infinito
    const imageIndex = wrap(0, data.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
      };

    const variants = {
      enter: {
          opacity: 0
      },
      center: {
        opacity: 1
      },
      exit: {
          opacity: 0
      }
    };
    
    return (
      <div className={style.home} >
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
              x: {type: "spring", stiffness: 300, damping: 300},
              opacity: {duration: 1}
            }}
          />
          <div className={style.data}>
            <h1 className={style.title}>{data[imageIndex].title}</h1>
            <h5 className={style.phrase}>{data[imageIndex].phrase}</h5>
            <button className={style.readBtn}>Read more</button>
          </div>
        </AnimatePresence>
        
        <motion.button 
          className={style.prev}
          whileHover={{scale: 1.2, opacity: 1, transition: {duration: 0.2}}}
          whileTap={{scale: 0.9}}
          onClick={() => paginate(-1)}
          >
            <span className="material-symbols-outlined">
              arrow_back_ios
            </span>
        </motion.button>
        
        <motion.button 
          className={style.next} 
          whileHover={{scale: 1.2, opacity: 1, transition: {duration: 0.2}}}
          whileTap={{scale: 0.9}}
          onClick={() => paginate(1)}
          >
            <span className="material-symbols-outlined">
              arrow_forward_ios
            </span>
        </motion.button>
        
      </div>
    );
}

export default Home;