import style from "./Header.module.css";
import { useState } from "react";
import Web from "./Web/Web";
import Mobile from "./Mobile/Mobile";
import { motion } from "framer-motion";

const Header = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <motion.div
      className={style.header}
    >
      <div className={style.title}>Moondo</div>
      <div className={style.menu}>
        <div className={style.web}>
          <Web />
        </div>
        <div className={style.mobile}>
          {state ? (
            <Mobile state={state} setState={setState} />
          ) : (
            <div onClick={() => setState(!state)}>
              <span className="material-symbols-outlined" id={style.mobileMenu}>
                menu
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
