import React from "react";
import styles from "./FormSection.module.css";
import FormInline from "./FormInline";
import { MdCallSvg } from "@/Data/svgData/MDIcons";

const FormSection = (dataScience, dataScienceCounselling) => {
  return (
    <div className={styles.fromWrap}>
      <div className={styles.leftForm}>
        <h5>Apply For Free Career Counselling</h5>
        <a href="tel:+917795687988">
          <button>
            <MdCallSvg />
            +91 77956 87988
          </button>
        </a>
      </div>
      <div className={styles.rightForm}>
        <div className={styles.rightFormWrap}>
          <FormInline
            radio={true}
            dataScience={dataScience}
            dataScienceCounselling={dataScienceCounselling}
            upSkillingHide={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
