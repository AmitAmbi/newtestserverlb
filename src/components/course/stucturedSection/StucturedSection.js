import React, { useEffect, useRef, useState } from "react";
import styles from "./StucturedSection.module.css";
import Image from "next/image";

function StructuredSection() {
  const stepRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target);
            setActiveStep(index + 1);
          }
        });
      },
      { threshold: 0.20 }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepRefs.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className="containerWidth">
        <h2>
          Structured <span className={styles.topHead}>Admission Process</span>
        </h2>
        <div className={styles.innerDiv}>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/structured_left_process.webp"
              alt="Zest"
              width="393"
              height="346"
              loading="lazy"
            />
          </div>
          <div>
            <div className={styles.rightSide}>
              {/* Step 1 */}
              <div
                className={`${styles.rightContainer} ${
                  activeStep >= 1 ? styles.activeStep : ""
                }`}
                ref={(el) => (stepRefs.current[0] = el)}
              >
   <div className={activeStep >= 1 ? styles.SpanBlue : styles.SpanGrey}>

   <span >1</span>
   </div>
                <div>
                  <p className={activeStep >= 1 ? styles.paraTopBlue : styles.paraTopGrey}>
                    Application Submission
                  </p>
                  <p className={styles.para}>
                    Share your professional background and aspirations with us
                    by filling out a simple application form.
                  </p>
                </div>
              </div>
              <div className={styles.spanLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="44"
                  viewBox="0 0 17 64"
                  fill="none"
                >
                  <rect
                    x="6.47266"
                    y="0.138672"
                    width="3.23951"
                    height="58.3113"
                    rx="1.61976"
                    fill={activeStep >= 2 ? "#0072BC" : "#ebebeb"}
                  />
                  <circle
                    cx="8.09097"
                    cy="55.7506"
                    r="8.09879"
                    fill={activeStep >= 2 ? "#0072BC" : "#ebebeb"}
                  />
                </svg>
              </div>

              {/* Step 2 */}
              <div
                className={`${styles.rightContainer} ${
                  activeStep >= 2 ? styles.activeStep : ""
                }`}
                ref={(el) => (stepRefs.current[1] = el)}
              >
                <div className={activeStep >= 2 ? styles.SpanBlue : styles.SpanGrey}>
                <span >2</span>
                </div>

                <div>
                  <p className={activeStep >= 2 ? styles.paraTopBlue : styles.paraTopGrey}>
                    Application Evaluation
                  </p>
                  <p className={styles.para}>
                    Our admissions team will review your application, assessing
                    your experience and goals to ensure the program fits your
                    career objectives.
                  </p>
                </div>
              </div>

              <div className={styles.spanLine}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="44"
                  viewBox="0 0 17 64"
                  fill="none"
                >
                  <rect
                    x="6.47266"
                    y="0.138672"
                    width="3.23951"
                    height="58.3113"
                    rx="1.61976"
                    fill={activeStep >= 3 ? "#0072BC" : "#ebebeb"}
                  />
                  <circle
                    cx="8.09097"
                    cy="55.7506"
                    r="8.09879"
                    fill={activeStep >= 3 ? "#0072BC" : "#ebebeb"}
                  />
                </svg>
              </div>

              {/* Step 3 */}
              <div
                className={`${styles.rightContainer} ${
                  activeStep >= 3 ? styles.activeStep : ""
                }`}
                ref={(el) => (stepRefs.current[2] = el)}
              >
                <div className={activeStep >= 3 ? styles.SpanBlue : styles.SpanGrey}>
                <span >3</span>
                </div>
           
                <div>
                  <p className={activeStep >= 3 ? styles.paraTopBlue : styles.paraTopGrey}>
                    Start Learning
                  </p>
                  <p className={styles.para}>
                    Once selected, you'll receive confirmation and onboarding
                    support to quickly start your learning journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StructuredSection;
