import { useState } from "react";
import HeroSectionContent from "./HeroSectionContent";
import PopupContent from "@/components/Global/PopupContent/PopupContent";
import VideoPopup from "@/components/Global/VideoPopup/VideoPopup";

const HeroSection = ({
  brochureLink,
  brochurePdf,
  idss,
  videoId,
  interstedInHide,
  upSkillingHide,
  dataScience,
  dataScienceCounselling,
  radio,
  downloadBrochure,
  dataScienceGeneric,
  spanTag,
  spanIcon,
  thumbnailurl,
  noIIt,
  title,
  orgTitle,
  descrption,
  OrangeButton,
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
  backgroundGradient,
  backgroundImage,
  showRightForm,
  purpleButton,
  PointsDiv,
}) => {
  const [popups, setPopups] = useState(false); // Popup for Download Brochure
  const [applyCounselingPopup, setApplyCounselingPopup] = useState(false); // Popup for Apply for Counseling
  const [video, setVideo] = useState(false);

  return (
    <div>
      {/* Download Brochure Popup */}
      <PopupContent
        popups={popups}
        setPopups={setPopups}
        heading="Download Syllabus"
        downloadBrochure
        dataScience={true}
        interstedInHide={interstedInHide}
        brochureLink={brochureLink}
        brochurePdf={brochurePdf}
        radio={radio}
      />

      {/* Apply for Counseling Popup */}
      <PopupContent
        popups={applyCounselingPopup}
        setPopups={setApplyCounselingPopup}
        heading="Apply for Counseling"
        dataScience={true}
        interstedInHide={interstedInHide}
        // Include any additional props needed for the counseling application
      />

      <VideoPopup triggers={video} setTriggers={setVideo} ids={idss} />

      <HeroSectionContent
        title={title}
        orgTitle={orgTitle}
        thumbnailurl={thumbnailurl}
        spanTag={spanTag}
        setPopups={setPopups}
        setApplyCounselingPopup={setApplyCounselingPopup} // Pass down the function to show the counseling popup
        setVideo={setVideo}
        videoId={videoId}
        interstedInHide={interstedInHide}
        dataScience={dataScience}
        upSkillingHide={upSkillingHide}
        dataScienceCounselling={dataScienceCounselling}
        radio={radio}
        descrption={descrption}
        spanIcon={spanIcon}
        OrangeButton={OrangeButton}
        applicationIcon={applicationIcon}
        CloseDes={CloseDes}
        ProgramIcon={ProgramIcon}
        DurationBot={DurationBot}
        DurationBotDate={DurationBotDate}
        trainingIcon={trainingIcon}
        TrainingBot={TrainingBot}
        CloseBotDate={CloseBotDate}
        BotWidth={BotWidth}
        BotHeight={BotHeight}
        backgroundGradient={backgroundGradient}
        backgroundImage={backgroundImage}
        showRightForm={showRightForm}
        purpleButton={purpleButton}
        PointsDiv={PointsDiv}
      />
    </div>
  );
};

export default HeroSection;
