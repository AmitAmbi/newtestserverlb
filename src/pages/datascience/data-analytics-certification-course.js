import { parseJSONData } from "@/Util/JsonConvertor";
import DataAnlyticsFirstPart from "@/components/CoursePage/FirstPart/DataAnlyticsFirstPart";
import DataAnlyticsSecondPart from "@/components/CoursePage/FirstPart/DataAnlyticsSecondPart";
import Head from "next/head";
import { useEffect, useState } from "react";
import {DataAnalyticsSchema} from "@/Data/Schema/DataAnalyticsSchema"
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
          data.page.includes("Adv Data Science and AI")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }
    };

    fetchData();
  }, []);

  const [batchDateData, setBatchDateData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Popup Data
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Data Analytics Program")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }

      // Fetch Batch Data
      const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
        method: "POST",
        body: JSON.stringify("Data Science and AI"),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (batchResponse.status === 200) {
        const { batchDate } = await batchResponse.json();
        setBatchDateData(batchDate);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>
          Best Data Analytics Course Online | Data Analytics Online Training
        </title>
        <meta
          name="description"
          content="Learn data analytics course online with Learnbay and Gain in-demand skills and boost your career. we are providing the best online data analytics courses. Enroll now!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data analytics certification course, data analytics certification, data analytics course, best data analytics course, data analyst course online, data analyst training, data analyst certification online, data analyst certification course          "
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-analytics-certification-course"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "Data Analytics Certification Program",
            "description": "Learn data analytics course online with Learnbay and Gain in-demand skills and boost your career. we are providing the best online data analytics courses.  Enroll now!",
            "url": "https://www.learnbay.co/datascience/data-analytics-certification-course",
            "offers": {
              "@type": "Offer",
              "price": 80000,
              "priceCurrency": "INR",
              "category": "Educational"
            },
             "provider": {
                  "@type": "Organization",
                  "name": "Learnbay",
                  "Url": "https://www.learnbay.co/"
                },
            "coursePrerequisites": "There are no prerequisites for this Business Analytics certification course as all modules are beginner-friendly and are taught from scratch. ",
            "hasCourseInstance": [
              {
                "@type": "CourseInstance",
                "courseMode": "Online",
               "courseWorkload": "P10W",
                "courseFee": {
                  "@type": "PriceSpecification",
                  "price": "₹ 80,000 + 18% GST",
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
            __html: JSON.stringify(DataAnalyticsSchema),
          }}
        />
      </Head>
      <main>
        <DataAnlyticsFirstPart
          SecondSectionData={
            DataScienceCourseData.DADataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.DADataScienceCourseData[0].testimonial
          }
          ibmOnly={true}
        />
        <DataAnlyticsSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.DADataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.DADataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.DADataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.DADataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/DataAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
