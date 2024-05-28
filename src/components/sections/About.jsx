import aboutImage from "../../assets/heroImage.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { config } from "../../utils/config";
import HeaderOfComponent from "../../layouts/HeaderOfComponent";
import { styles } from "../../utils/styles";

const InfoCard = ({ id, count, desc }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <motion.div
      key={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="border-2 border-[#ff157c] relative min-w-[10rem] max-w-[16rem] bg-transparent p-3 rounded-xl"
    >
      <h3 className="md:text-4xl text-2xl font-semibold text-white">
        {count}
        <span className="text-[#ff157c]">+</span>
      </h3>
      <span className="md:text-base text-sm text-white">{desc}</span>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section
      name="about"
      id="about"
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
    >
      <div className="text-center mt-16">
        <HeaderOfComponent
          h3={config.sections.about.h3}
          h4={config.sections.about.h4}
        />
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="my-3 w-11/12 mx-auto">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-justify leading-10 text-2xl text-white"
              >
                {config.sections.about.content}
              </motion.p>
              <div className="flex justify-center md:justify-start mt-10 items-center gap-7">
                {config.sections.about.info.map(({ id, count, desc }) => (
                  <InfoCard key={id} id={id} count={count} desc={desc} />
                ))}
              </div>
              <a href="/resume.pdf" download rel="noreferrer">
                <button className="mt-10 btn-primary">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center mt-7 md:mt-0">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
              <img
                src={aboutImage}
                alt="/"
                className="w-full object-cover bg-[#ff157c] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
