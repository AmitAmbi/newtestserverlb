import React, { useState } from "react";
import styles from "./BoxShape.module.css";
import { BsGraphUp } from "react-icons/bs";
import Image from "next/image";
import { HomeBoxData } from "./BoxShapeData";
const BoxShape = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        className={styles.box}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.imgBack}>
          {/* <MdOutlineLiveTv className={styles.boxIcon} /> */}
        </div>
        <h5>{HomeBoxData[0].title}</h5>
        <p>{HomeBoxData[0].desc}</p>
      </div>

      <div className={hover ? styles.box : styles.boxActive}>
        <div className={styles.imgBack}>
          <div className={hover ? styles.blurDivS : styles.blurDiv}></div>

          <Image
            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Live-classes-home-alt.svg"
            width="60"
            height="60"
            loading="lazy"
            alt="data science course"
          />
        </div>
        <h5>{HomeBoxData[1].title}</h5>
        <p>{HomeBoxData[1].desc}</p>
      </div>

      <div
        className={styles.box}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.imgBack}>
          <BsGraphUp className={styles.boxIcon} />
        </div>
        <h5>{HomeBoxData[2].title}</h5>
        <p>{HomeBoxData[2].desc}</p>
      </div>
    </>
  );
};

export default BoxShape;
