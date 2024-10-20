import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import FirstPart from "@/components/CoursePage/FirstPart/DSAIMastersCertificationFirstPart";
import SecondPart from "@/components/CoursePage/FirstPart/DSAIMastersCertificationSecondPart";
import Navbar from "@/components/Global/Navbar/Navbar";
import { MasterAI } from "@/Data/Schema/DataScienceAndAIMasterSchema";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  return (
    <>
      <Head>
        <title>
          Best Data Science and AI Master Certification Program Online
        </title>
        <meta
          name="description"
          content="Unleash your potential with the best online Data Science and AI Master Certification Program. Elevate your skills, gain expertise, and propel your career.          "
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science and ai course, advanced data science course, data science and ai, ai and data science course, artificial intelligence and data science course, advanced certification in data science and ai"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-and-ai-master-certification-program"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "http://schema.org",
  "@type": "Course",
  "name": "Advance data science and AI Certification",
  "description": "Our Advance Data Science and AI Course brings you a wide knowledge of Data Science and AI and helps you to make precise data-driven decisions.",
  "url": "https://www.learnbay.co/datascience/advance-data-science-certification-courses",
  "offers": {
    "@type": "offer",
    "price": "125000",
    "pricecurrency": "INR",
    "category": "Educational"
  },
   "provider": {
        "@type": "Organization",
        "name": "Learnbay",
        "Url": "https://www.learnbay.co/"
      },
  "coursePrerequisites": "There are no prerequisites for Advanced Data Science and AI Program, as all modules are beginner-friendly and are taught from scratch. We provide special classes and assistance for non-IT/Non-Programmers.",
  "hasCourseInstance": [
    {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "P10W",
      "courseFee": {
        "@type": "PriceSpecification",
        "price": "₹ 1,25,000 + 18% GST",
        "priceCurrency": "INR"
      }
    }
  ]
    }`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(MasterAI),
          }}
        />
      </Head>
      <main>
        <FirstPart


          summaryData={
            DataScienceCourseData.DataScienceCourseData[0].summarySection
          }
          ProggramSectionData={
            DataScienceCourseData.DataScienceCourseData[0].ProggramSection
          }

          upskillData={DataScienceCourseData.DataScienceCourseData[0].upskillMbl}
          upskillingData={DataScienceCourseData.DataScienceCourseData[0].upskillingData}
        
        />
      </main>
      <main>
        <SecondPart
        
         sections={DataScienceCourseData.DataScienceCourseData[0].sections}

         certificateNew={
           DataScienceCourseData.DataScienceCourseData[0].certificateNew
         }
          projectSection={
            DataScienceCourseData.DataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DSMasterCertificationCourse");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
