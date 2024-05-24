import { styles } from "../utils/styles";

const HeaderOfComponent = ({ h3, h4 }) => (
  <>
    <h3 className={styles.sectionHeadText}>
      {h3[0]}{" "}
      <span className="text-[#ff157c] border-b-2 border-b-white">{h3[1]}</span>
    </h3>
    <h4 className={`{styles.sectionSubText} mt-5 font-signature`}>{h4}</h4>
  </>
);

export default HeaderOfComponent;
