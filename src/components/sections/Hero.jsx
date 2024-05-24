/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../utils/styles";
import { config } from "../../utils/config";
import { ComputersCanvas } from "../canvas";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import { FaHandSparkles } from "react-icons/fa";

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Backend Engineer", "AI Engineer"],
      startDelay: 200,
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const variants = {
    hidden: { rotateY: 180, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 md:top-[30px] top-[100px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-8 w-8 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-60 w-1 sm:h-80" />
        </div>

        <div>
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <span className="font-signature">Hola</span>, I am{" "}
            <span className="text-[#915EFF]">{config.hero.name}</span>
          </motion.h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br />
            <span ref={el}></span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute bottom-28 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
