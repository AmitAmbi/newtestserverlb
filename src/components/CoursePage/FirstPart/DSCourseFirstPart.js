import dynamic from "next/dynamic";
import React from "react";

const TrainerSection = dynamic(() =>
  import("../../../components/Global/TrainerSection/TrainerSection")
);

const GetHire = dynamic(() => import("../../Home/GetHire/GetHire"));

const FirstSection = dynamic(() =>
  import("../../CoursePage/FirstSection/FirstSection")
);

const Course = dynamic(() => import("../../Home/Course/DSCourse"));
const Realstory = dynamic(() => import("../../Home/Realstory/Realstory"));

import Accordion from "@/components/Seo/DropDownContent/Accordion";
const FirstPart = () => {
  return (
    <>
      <FirstSection
        dataScienceCounselling={true}
        interstedInHide={true}
        ThirdTyped="Live Interactive Classes"
        dataScience={true}
        titleCourse="Data Science Courses – Learnbay        "
        cityParaCont="Experience the analytical power of data science with Learnbay’s industry-paced upskilling programs designed to propel competitive success rates. Enroll in our data science courses to break into the perplexity of emerging data-driven culture.     "
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
        FirstRightImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Adv-dsai-_1_-min.webp"
        firstToparaImg="– Learnbay"
        firstHeading="Data Science Courses       "
        firstTopPara="  "
        idss="djokazk1d-0"
        thumbnailUrl="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/ds-fs.webp"
        videoId="djokazk1d-0"
        DSWolf={true}
        softwareBtnHide={true}
      />

      <Course
        // radio={true}

        // interstedInHide={true}
        newDesign={true}
        DomainInput={true}
        interstedInHide={true}
        DatascienOnlycourse={true}
      />

      <Realstory />
      <TrainerSection idss="eautK0odE7Q" />

      {/* <Testimonial redirectDS={true} heading="" Testimonial={TestimonialData} /> */}

      <Accordion />
      <GetHire />
    </>
  );
};

export default React.memo(FirstPart);
