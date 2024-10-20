import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import BAFirstPart from "@/components/CoursePage/FirstPart/BAFirstPart";
import BASecondPart from "@/components/CoursePage/FirstPart/BASecondPart";

function Blockchain({ DataScienceCourseDataJson }) {
  const DataScienceCourseData = parseJSONData(DataScienceCourseDataJson);

  const [popupData, setPopupData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Business Analytics master Certification Program")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }
    };

    fetchData();
  }, []);

  // const [batchDateData, setBatchDateData] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch Popup Data
  //     const popupResponse = await fetch("/api/Popup/popupGenerate", {
  //       method: "GET",
  //     });
  //     if (popupResponse.status === 200) {
  //       const { popData } = await popupResponse.json();
  //       const foundPopup = popData.find((data) =>
  //         data.page.includes("Adv Data Science and AI")
  //       );
  //       if (foundPopup) {
  //         setPopupData(foundPopup);
  //       }
  //     }

  //     // Fetch Batch Data
  //     const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
  //       method: "POST",
  //       body: JSON.stringify("Data Science and AI"),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (batchResponse.status === 200) {
  //       const { batchDate } = await batchResponse.json();
  //       setBatchDateData(batchDate);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Best Business Analyst Course with Placement Support</title>
        <meta
          name="description"
          content="Get the best Business Analytics & Analyst Course with placement support. Top certification & training for online classes. Enrol now for better career options."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="  business analytics course, business analyst course with placement, business analyst classes online, business analyst course with placement guarantee, best business analyst course, best business analysis course, best business analyst training, top business analyst certification, business analytics course with placement, business analysis training and placement, best business analyst course with placement,      "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/business-analytics-certification-course"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "Businesss Analytics Master Certification Program",
            "description": "Upskill yourself with cutting edge Business Analytics master Skills and Techniques by enrolling into the Learnbay's Business Analaytics certification Course.",
            "url": "https://www.learnbay.co/datascience/business-analytics-certification-course",
            "offers": {
              "@type": "Offer",
              "price": 90000,
              "priceCurrency": "INR",
              "category": "Educational"
            },
             "provider": {
                  "@type": "Organization",
                  "name": "Learnbay",
                  "Url": "https://www.learnbay.co/"
                },
            "coursePrerequisites": "There are no prerequisites for this Business Analytics master certification course as all modules are beginner-friendly and are taught from scratch. ",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "Online",
                "courseWorkload": "P10W",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": "₹ 90,000 + 18% GST",
                  "priceCurrency": "INR"
                }
              }
            ]



          }`,
          }}
        />
      </Head>
      <main>
        <BAFirstPart
          summaryData={
            DataScienceCourseData.BADataScienceCourseData[0].summarySection
          }
          ProggramSectionData={
            DataScienceCourseData.BADataScienceCourseData[0].ProggramSection
          }
        />
        <BASecondPart

        
          sections={DataScienceCourseData.BADataScienceCourseData[0].sections}
          upskillData={DataScienceCourseData.BADataScienceCourseData[0].upskillMbl}
          upskillingData={DataScienceCourseData.BADataScienceCourseData[0].upskillingData}
        
          certificateNew={
            DataScienceCourseData.BADataScienceCourseData[0].certificateNew
          }
          projectSection={
            DataScienceCourseData.BADataScienceCourseData[0].projectSection
          }
          toolsdynamic={true}
          FAQNewData={DataScienceCourseData.BADataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/BusinessAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
