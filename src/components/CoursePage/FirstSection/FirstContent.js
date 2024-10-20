import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaCheck, FaYoutube } from "react-icons/fa";
import Button from "../../Global/Button/Button";
import Form from "../../Global/Form/Form";
import styles from "./FirstSection.module.css";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const FirstContent = ({
  softwareBtnHide,
  firstToparaImg,
  firstHeading,
  FirstRightImg,
  firstTopPara,
  ibmOnly,
  cityParaCont,
  setPopups,
  S3RightImage,
  setVideo,
  DSWolf,
  IBMGl,
  videoId, // Pass videoId as a prop
  thumbnailUrl, // Pass thumbnailUrl as a prop
  dataScience,
  interstedInHide,
  upSkillingHide,
  dataScienceGeneric,
  brochureLink,
  brochurePdf,
  dataScienceCounselling,
  downloadBrochure,
  fullStack,
  titleCourse,
  radio,
  topHide,
  fresher,
  backgorunimg,
  isSpecialPage,
  isGuwahati,
  backgroundImage,
}) => {
  const texts = [
    "Guaranteed Interview Calls",
    "1:1 Doubt Session",
    "IBM Project Certification",
    "Designed for Professionals",
  ];

  const textfresher = [
    "Guaranteed Interview Calls",
    "1:1 Doubt Session",
    "6 Months Internship Certificate",
    "Final Year Project Assistance",
  ];
  const [mobile, setMobile] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    if (width < 641) {
      setMobile(true);
    }
    const isVideoInView = (scrollY) => {
      // Implement logic to check if the video is in view
      // For simplicity, you can replace this with your own logic
      return true;
    };
    const handleScroll = () => {
      const threshold = 300;
      const scrollY = window.scrollY;

      const scrollDirection = scrollY > lastScrollTop ? "down" : "up";
      const isScrollingUp = scrollDirection === "up";
      const isBeyondThreshold = scrollY <= threshold;

      setShowThumbnail(
        isBeyondThreshold || (isScrollingUp && !isVideoInView(scrollY))
      );
      setLastScrollTop(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const popupShow = () => {
    setPopups(true);
  };

  const videoShow = () => {
    setVideo(true);
    setShowThumbnail(false);
    if (videoRef.current) {
      videoRef.current.seekTo(0); // Reset video to start
      videoRef.current.getInternalPlayer().play(); // Play the video
    }
  };
  const customStyles = `
  .react-player__play-icon {
    display: none !important;
  }
`;
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, // Apply backgroundImage as background image style
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // const youtubeVideoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <>
      <style>{customStyles}</style>
      <div className={styles.First} style={backgorunimg ? containerStyle : {}}>
        <div className={styles.FirstLeft}>
          {topHide ? "" : <p className={styles.ptopC}>{firstTopPara}</p>}
          <h1
            className={`${styles.h1} ${
              isSpecialPage ? styles.specialPageH1 : ""
            }`}
          >
            {firstHeading}{" "}
            <span className={styles.h1Span}>{firstToparaImg}</span>
          </h1>
          <p className={styles.ptopCiity}>{cityParaCont}</p>
          {mobile ? (
            ""
          ) : (
            <>
              <div className={ibmOnly ? styles.DAibm : styles.Desktop}>
                {isGuwahati ? (
                  <>
                    {" "}
                    <p className={styles.ptop}>In Collaboration With</p>{" "}
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
                      width={230}
                      height={60}
                      priority
                      alt="data science course"
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    {DSWolf ? (
                      <>
                        <p className={styles.ptop}>Degree & Certification(s)</p>
                        <div className={styles.ImageBlock}>
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/DS-only.webp"
                            width="430"
                            height="44"
                            priority
                            alt="data science course"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        {" "}
                        <p className={styles.ptop}>In Collaboration With</p>
                        <div className={styles.ImageBlock}>
                          {ibmOnly ? (
                            <Image
                              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                              width="70"
                              height="30"
                              priority
                              alt="data science course"
                            />
                          ) : (
                            <Image
                              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                              width="266"
                              height="48"
                              priority
                              alt="data science course"
                            />
                          )}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {isGuwahati ? (
                <>
                  <div className={styles.twodiv}>
                    <div className={styles.divone}>
                      <span><FaCheck /></span> Campus Immersion
                    </div>
                    <div className={styles.divone}>
                      <span><FaCheck /></span> Industry Certification
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {fresher ? (
                    <div className={styles.animationTextWrap}>
                      <span className={styles.animationText}>
                        Guaranteed Interview Calls
                      </span>
                    </div>
                  ) : (
                    <>
                      {IBMGl ? (
                        <div className={styles.animationTextWrap}>
                          {textfresher.map((text, index) => (
                            <div
                              key={index}
                              className={styles.verticalSlideWrapper}
                            >
                              <span className={styles.animationText}>
                                {text}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={styles.animationTextWrap}>
                          {texts.map((text, index) => (
                            <div
                              key={index}
                              className={styles.verticalSlideWrapper}
                            >
                              <span className={styles.animationText}>
                                {text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}

              {isGuwahati ? (
                <>
                  <div className={styles.btnImage2 } >
                    <div onClick={popupShow} >
                      <Button   text="DOWNLOAD BROCHURE" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <Link href="/master-application">
                        <div className={styles.btnImage}>
                          <Button
                            whiteBgButton={true}
                            text="START MY APPLICATION"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <div className={styles.btnImage}>
                  <div onClick={popupShow}>
                    <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                  </div>
                  {softwareBtnHide ? (
                    ""
                  ) : (
                    <div onClick={videoShow} className={styles.FaPlay}>
                      INTRO VIDEO <FaYoutube className={styles.IconYou} />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        <div className={styles.secondLeft}>
          <div className={styles.form}>
            {isGuwahati ? (
              <>
                {" "}
                <h4>
                  Interested in{" "}
                  <span style={{ color: "#FE7A36" }}> Degree?</span>
                </h4>
              </>
            ) : (
              <>
                {" "}
                <p className={styles.p}>Free Career Counselling</p>
              </>
            )}

            <Form
              dataScience={dataScience}
              dataScienceCounselling={dataScienceCounselling}
              radio={radio}
              downloadBrochure={downloadBrochure}
              fullStack={fullStack}
              dataScienceGeneric={dataScienceGeneric}
              upSkillingHide={upSkillingHide}
              interstedInHide={interstedInHide}
            />
          </div>
          {/* {S3RightImage ? (
            <div className={`"bgVideo"`}>
              <Image width="462" height="400" src={FirstRightImg} />
            </div>
          ) : (
            <div onClick={videoShow} className={`${styles.bgvidos} "bgVideo"`}>
              <Image width="532" height="300" src={thumbnailUrl} />
            </div>
          )}  */}
        </div>

        {mobile ? (
          <>
            <div className={styles.Mobile}>
              {isGuwahati ? (
                <>
                  <p className={styles.ptoptwo}>In Collaboration With</p>{" "}
                  <div className={styles.ImageBlock}>
                    <Image
                      src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/iit_guwati_logo.webp"
                      width="340"
                      height="44"
                      priority
                      alt="data science course"
                      className={styles.imgGuwahati}
                    />
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {DSWolf ? (
                    <>
                      <p className={styles.ptop}>Degree & Certification(s)</p>
                      <div className={styles.ImageBlock}>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/DS-only.webp"
                          width="340"
                          height="44"
                          priority
                          alt="data science course"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <p className={styles.ptop}>In Collaboration With</p>
                    </>
                  )}
                  <div className={styles.ImageBlock}>
                    {ibmOnly ? (
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/ibmnew.webp"
                        width="70"
                        height="30"
                        priority
                        alt="data science course"
                      />
                    ) : (
                      <Image
                        src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ibm%26microsoft.webp"
                        width="250"
                        height="40"
                        priority
                        alt="data science course"
                      />
                    )}
                  </div>
                </>
              )}
              {isGuwahati ? (
                <div className={styles.twodiv}>
                  <div className={styles.divone}>
                    <span><FaCheck /></span> Campus Immersion
                  </div>
                  <div className={styles.divone}>
                    <span><FaCheck /></span> Industry Certification
                  </div>
                </div>
              ) : (
                ""
              )}

              {isGuwahati ? (
                <>
                  {" "}
                  <div className={styles.btnImage2 }>
                    <div onClick={popupShow}>
                      <Button bannerButton={true} text="DOWNLOAD BROCHURE" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <Link href="/master-application">
                        <div>
                          <Button
                            whiteBgButton={true}
                            text="START MY APPLICATION"
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className={styles.btnImageMobile}>
                    <div onClick={popupShow}>
                      <Button bannerButton={true} text="DOWNLOAD SYLLABUS" />
                    </div>
                    {softwareBtnHide ? (
                      ""
                    ) : (
                      <div onClick={videoShow} className={styles.FaPlay}>
                        INTRO VIDEO <FaYoutube className={styles.IconYou} />
                      </div>
                    )}
                  </div>
                </>
              )}

              <div className={styles.secondLeft}>
                <div className={styles.form}>
                  <p className={styles.p}>Free Career Counselling</p>
                  <Form
                    dataScience={dataScience}
                    dataScienceCounselling={dataScienceCounselling}
                    radio={radio}
                    downloadBrochure={downloadBrochure}
                    fullStack={fullStack}
                    titleCourse={titleCourse}
                    // brochureLink={brochureLink}
                    dataScienceGeneric={dataScienceGeneric}
                    upSkillingHide={upSkillingHide}
                    interstedInHide={interstedInHide}
                  />
                </div>
                {/* {S3RightImage ? (
                  <div className={`"bgVideo"`}>
                    <Image width="231" height="200" src={FirstRightImg} />
                  </div>
                ) : (
                  <div
                    onClick={videoShow}
                    className={`${styles.bgvidos} "bgVideo"`}
                  >
                    <Image width="356" height="200" src={thumbnailUrl} />
                  </div>
                )} */}
              </div>
            </div>{" "}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default FirstContent;
