import { BallCanvas } from "../canvas";
import { technologies } from "../../utils/tech";

import { config } from "../../utils/config";
import HeaderOfComponent from "../../layouts/HeaderOfComponent";
import { styles } from "../../utils/styles";

const Tech = () => {
  return (
    <section
      name="tech"
      id="tech"
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
    >
      <div className="text-center mt-16">
        <HeaderOfComponent
          h3={config.sections.tech.h3}
          h4={config.sections.tech.h4}
        />
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
