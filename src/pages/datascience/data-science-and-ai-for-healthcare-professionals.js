import Head from "next/head";
import { parseJSONData } from "@/Util/JsonConvertor";
import { useEffect, useState } from "react";
import HealthFirstPart from "@/components/CoursePage/FirstPart/HealthFirstPart";
import HealthSecondPart from "@/components/CoursePage/FirstPart/HealthSecondPart";

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
          data.page.includes("Business Analytics Program")
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
        <title>
        Data Science & AI Course for Healthcare Professionals | Learnbay
        </title>
        <meta
          name="description"
          content="Empower your medical domain knowledge with our Data Science course for  Healthcare Professionals. Elevate your skills and drive innovation with Learnbay!!"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="data science for medical professionals, data science for healthcare professionals, data science & AI in healthcare, data science certification for healthcare professionals, data science course for healthcare professionals, data science & AI certification for healthcare sector"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/data-science-and-ai-for-healthcare-professionals"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
            "@context": "http://schema.org",
            "@type": "Course",
            "name": "Healthcare Professional Program",
            "description": "Upskill yourself with cutting edge Data Science for Healthcare Professional Skills and Techniques by enrolling into the Learnbay's Healthcare Professional Course.",
            "url": "https://www.learnbay.co/datascience/data-science-and-ai-for-healthcare-professionals",
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
            "coursePrerequisites": "There are no prerequisites for this Data Science for Healthcare Professional certification course as all modules are beginner-friendly and are taught from scratch. ",
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
        <HealthFirstPart
          SecondSectionData={
            DataScienceCourseData.HealthcareDataScienceCourseData[0].secondSection
          }
          TestimonialData={
            DataScienceCourseData.HealthcareDataScienceCourseData[0].testimonial
          }
        />
        <HealthSecondPart
          masterSyllabusMobile={
            DataScienceCourseData.HealthcareDataScienceCourseData[0]
              .masterSyllabusMobile
          }
          CertificateData={
            DataScienceCourseData.HealthcareDataScienceCourseData[0].Certificate
          }
          projectSection={
            DataScienceCourseData.HealthcareDataScienceCourseData[0].projectSection
          }
          FAQNewData={DataScienceCourseData.HealthcareDataScienceCourseData[0].faq}
        />
      </main>
    </>
  );
}
export default Blockchain;
export async function getStaticProps() {
  const data = await import("../../Data/HealthCareAnalyticsData");
  function getDataScienceCourseDataJSON(dataScienceCourseData) {
    return JSON.stringify(dataScienceCourseData);
  }
  const DataScienceCourseDataJson = getDataScienceCourseDataJSON(data);
  return { props: { DataScienceCourseDataJson } };
}
