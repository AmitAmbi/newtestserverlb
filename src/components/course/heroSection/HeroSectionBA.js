import { useEffect, useState, lazy, Suspense } from "react";
import Image from "next/image"; // Import Next.js Image component
import styles from "./HeroSection.module.css";
import Button from "@/components/Global/Button/Button";
import PopupContent from "@/components/Global/PopupContent/PopupContent";

// Lazy-load the Form component
const Form = lazy(() => import("@/components/Global/Form/Form"));

function HeroSectionBA({
  interstedInHide,
  dataScienceCounselling,
  upSkillingHide,
  brochureLink,
  brochurePdf,
  radio,
  dataScience,
  title,
  orgTitle,
  descrption,
  OrangeButton,
  purpleButton,
  backgroundImage, // URL for background image
  showRightForm, // Prop to control visibility of the right-side form
  applicationIcon,
  CloseDes,
  ProgramIcon,
  DurationBot,
  DurationBotDate,
  trainingIcon,
  TrainingBot,
  CloseBotDate,
  BotWidth,
  BotHeight,
}) {
  const [popupType, setPopupType] = useState(null); // Track which popup to show
  const [popups, setPopups] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track mobile view

  const popupShow = (type) => {
    setPopupType(type);
  };

  // Check if the screen is mobile on initial load and on resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile); // Update on resize

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className={styles.mainBg}>
    <PopupContent
        popups={popupType === "brochure"}
        setPopups={() => setPopupType(null)}
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        radio={radio}
        heading="Download Brochure"
      />
      <PopupContent
        popups={popupType === "counselling"}
        setPopups={() => setPopupType(null)}
        dataScience={true}
        interstedInHide={interstedInHide}
        heading="Apply For Counselling"
      />

      <div
        className={styles.containerMaster}
        style={{
          backgroundImage: !isMobile && `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="containerWidth">
          <div className={`${styles.innerDiv} ${styles.innerDivMaster}`}>
            <div className={`${styles.firstSection} ${styles.firstSectionBA}`}>
              <div className={styles.starDiv}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Course-home/ada_AI_icon.webp"
                  alt="Curriculum Inclusive of Gen-AI"
                  width={59}
                  height={72}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/HomePage/hero_brain.webp"
                />
                <h5>Project-based learning</h5>
              </div>
              <h1>
                Best
                <span className={styles.span}> Business Analytics </span>
                Course Training Online
              </h1>
              <div className={`${styles.points} ${styles.pointsBA}`}>
              <div className={styles.item1}>
                  <span>Program Eligibility </span>
                  <p>Min 1 year in tech</p>
                </div>
                <hr className={styles.hrOne} />
                <div className={styles.itm2}>
                  <span>Placement rate </span>
                  <p>90%</p>
                </div >
                <hr className={styles.hrOne} />

                <div className={styles.itm3}>
                  <span>Hours of learning </span>
                  <p>300+</p>
                </div>
              </div>

              <div className={styles.imgBot}>
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                  alt="Video Thumbnail"
                  width={684}
                  height={450}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/Coursepage/ibm_microsoft_head.webp"
                />
              </div>

              <div className={styles.btnDiv}>
                <div
                  className={styles.btn}
                  onClick={() => popupShow("brochure")}
                >
                  <Button text="Download Syllabus " grayButton />
                </div>
                <div onClick={() => popupShow("counselling")}>
                  <Button
                    text="Start My Application"
                    OrangeButton={OrangeButton}
                    purpleButton={purpleButton}
                  />
                </div>
              </div>
              {/* Mobile-only button */}
              {isMobile && (
                <div className={styles.btnDivM}>
                  <div
                    className={styles.btn}
                    onClick={() => popupShow("brochure")}
                  >
                    <Button text="Download Syllabus" grayButton />
                  </div>
                  <div onClick={() => popupShow("counselling")}>
                    <Button
                      text="Start My Application"
                      purpleButton={purpleButton}
                      OrangeButton={OrangeButton}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right-side form, mobile only */}

            <Suspense fallback={<div>Loading Form...</div>}>
              <div className={styles.formdiv}>
                <h3>
                  Check Your <span className={styles.span}>Eligibility</span>
                </h3>
                <Form
                  dataScienceCounselling={dataScienceCounselling}
                  upSkillingHide={upSkillingHide}
                  interstedInHide={interstedInHide}
                />
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="containerWidth">
        <div className={`${styles.botDiv} ${styles.bottomSection}`}>
          <div className={styles.innerBotDiv}>
            <Image
              src={applicationIcon}
              alt="Application Closes"
              width={BotWidth}
              height={BotHeight}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/application_b.webp"
            />
            <div className={styles.content}>
              <p>{CloseDes}</p>
              <h3>{CloseBotDate}</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src={ProgramIcon}
              alt="Program Duration"
              width={BotWidth}
              height={BotHeight}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/program_b.webp"
            />
            <div className={styles.content}>
              <p>{DurationBot}</p>
              <h3>{DurationBotDate}</h3>
            </div>
          </div>
          <div className={styles.innerBotDiv}>
            <Image
              src={trainingIcon}
              alt="Training Format"
              width={BotWidth}
              height={BotHeight}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://d32and0ii3b8oy.cloudfront.net/web/V4/course_iit_guwahati/training_b.webp"
            />
            <div className={styles.content}>
              <p>{TrainingBot}</p>
              <h3>
                Live Online <span className={styles.span}>|</span> Hybrid
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSectionBA;
