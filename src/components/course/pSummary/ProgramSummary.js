import React from "react";
import styles from "./ProgramSummary.module.css";
import Image from "next/image";
import programData from "./ProgramData";

function ProgramSummary() {
  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <div className={styles.innerDiv}>
          <h2>
            {" "}
            Program <span className={styles.topSpan}>Summary</span>
          </h2>
          <div className={styles.innerBoxDiv}>
            {programData.map((item, index) => {
              const backgroundClass =
                index === 0
                  ? styles.headContBlue
                  : index === 1
                  ? styles.headContGreen
                  : styles.headContOrange;

              return (
                <div key={item.id} className={styles.innerBox}>
                  <div className={`${styles.headCont} ${backgroundClass}`}>
                    <Image
                      src={item.imgSrc}
                      alt={item.imgAlt}
                      quality={100}
                      width={60}
                      height={60}
                      loading="lazy"
                      className={styles.img}
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p className={styles.pTop}>{item.description}</p>
                  {item.logoImgSrc && (
                      <Image
                        src={item.logoImgSrc}
                        alt={item.logoImgAlt}
                        quality={100}
                        width={366}
                        height={56}
                        loading="lazy"
                        className={styles.LogoImg}
                      />
                    )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSummary;
