import React, { useEffect, useState, useRef, memo, useCallback } from "react";
import Image from "next/image";
import styles from "./PSummary.module.css"; // Ensure the CSS file is named correctly
import summaryData from "./SummaryData"; // Import the data file
import Form from "@/components/Global/Form/Form"; // Adjust the import path according to your project structure

const PSummaryForm = ({
  showForm,
  dataScienceCounselling,
  upSkillingHide,
  interstedInHide,
  dataScience,
}) => {
  return (
    <div className={styles.Container}>
      <h2>
        Program <span className={styles.spans}>Summary</span>
      </h2>
      <div className={styles.gridDiv}>
        <div
          className={`${styles.contentContainer} ${styles.contentContainerGrid}`}
        >
          {summaryData.map((item) => (
            <div key={item.id} className={styles.Box}>
              <div>
                <Image
                  src={item.imageSrc}
                  width={60}
                  height={60}
                  loading="lazy"
                  alt={item.imageAlt}
                />
                <h4>{item.title}</h4>
              </div>
              <div>
                <p>{item.description}</p>
                {item.extraImageSrc && (
                  <Image
                    src={item.extraImageSrc}
                    width={200}
                    height={30}
                    loading="lazy"
                    alt={item.extraImageAlt}
                    className={styles.ibmLogo}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show Form conditionally based on mobile view */}
        {showForm && (
          <div className={styles.formdiv}>

            <h4>Check Your <span>Eligibility</span></h4>
            <Form
              dataScienceCounselling={dataScienceCounselling}
              upSkillingHide={upSkillingHide}
              interstedInHide={interstedInHide}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(PSummaryForm);
