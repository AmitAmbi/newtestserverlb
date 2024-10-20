import { FaUserGraduate, FaArrowUp } from "react-icons/fa";


import Styles from "./WhoIsProgram.module.css";
import { MdOutlineCastForEducationSvg, MdOutlineWorkOutlineSvg } from "@/Data/svgData/MDIcons";

function WhoIsProgram({ first, second, third, forth }) {
  return (
    <section className={Styles.container}>
      <h3>Who is this program for</h3>
      <div className={Styles.BoxDiv}>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineCastForEducationSvg className={Styles.icon} />
            <p className={Styles.BgCont1}>Education</p>
          </div>
          <p className={Styles.BoxCont}>{first}</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <MdOutlineWorkOutlineSvg className={Styles.icon} />
            <p className={Styles.BgCont2}>Work Exp.</p>
          </div>
          <p className={Styles.BoxCont}>{second}</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <FaUserGraduate className={Styles.icon} />
            <p className={Styles.BgCont1}>Career Stage</p>
          </div>
          <p className={Styles.BoxCont}>{third}</p>
        </div>
        <div className={Styles.InnerBox}>
          <div className={Styles.imgBox}>
            <FaArrowUp className={Styles.icon} />
            <p className={Styles.BgCont2}>Aspirations</p>
          </div>
          <p className={Styles.BoxCont}>{forth}</p>
        </div>
      </div>
    </section>
  );
}

export default WhoIsProgram;
