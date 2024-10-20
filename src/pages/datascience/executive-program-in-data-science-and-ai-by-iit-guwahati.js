import { parseJSONData } from "@/Util/JsonConvertor";
import dynamic from "next/dynamic";
import Head from "next/head";

import ExecutiveFirstPart from "@/components/CoursePage/FirstPart/ExecutiveFirstPart";
const ExecutiveSecondPart = dynamic(() =>
  import("@/components/CoursePage/FirstPart/ExecutiveSecondPart")
);

const Blockchain = ({ DataScienceCourseDataJson }) => {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Executive program in Data Science and AI | IITG Certification
        </title>
        <meta
          name="description"
          content="Advance your career with Learnbay's Executive Program in Data Science and AI. Gain advanced skills and become E&ICT Academy IIT Guwahati certified Data Scientist."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="iit data science course, iit data science certification, data science course from iit, data science course iit, iit data science course for working professionals, iit data science course fees, iit data scientist course, executive program in data science, executive data science program"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/executive-program-in-data-science-and-ai-by-iit-guwahati"
        />
      </Head>
      <main>
        <ExecutiveFirstPart
          WolfLink={true}
          formbtn={true}
          TestimonialData={
            DataScienceCourseData.ExcutiveProgramAIDS[0].testimonial
          }
        />
        <ExecutiveSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.ExcutiveProgramAIDS[0].masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.ExcutiveProgramAIDS[0].Certificate
          }
          projectSection={
            DataScienceCourseData.ExcutiveProgramAIDS[0].projectSection
          }
          FAQNewData={DataScienceCourseData.ExcutiveProgramAIDS[0].faq}
        />

        {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
      </main>
    </>
  );
};
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/ExecutiveProgramData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
