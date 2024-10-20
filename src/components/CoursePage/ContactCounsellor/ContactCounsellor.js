import React from "react";
import styles from "../ContactCounsellor/ContactCounsellor.module.css";
import { AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import { useState } from "react";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";
import { MdOutlineWhatsappSvg } from "@/Data/svgData/MDIcons";

const ContactCounsellor = ({
  dataScience,
  dataScienceCounselling,
  interstedInHide,
  titleCourse,
  brochureLink,
  brochurePdf,
}) => {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const openWhatsApp = () => {
    const phoneNumber = "+917795687988"; // Replace with the desired WhatsApp phone number
    const whatsappURL = `https://wa.me/${phoneNumber}`;
    window.open(whatsappURL, "_blank");
  };
  // const sendEmailViaApi = () => {
  //   // Replace with the API endpoint that triggers the email
  //   const apiEndpoint = "https://example.com/send-email";

  //   fetch(apiEndpoint, {
  //     method: "POST", // Adjust the HTTP method as needed
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // You can send any necessary data in the request body
  //     body: JSON.stringify({
  //       to: "contacts@learnbay.co",
  //       subject: "Your email subject",
  //       message: "Your email message",
  //     }),
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // If the API responds with a success status, open the email client
  //         window.location.href = "mailto:contacts@learnbay.co";
  //       } else {
  //         // Handle API error here
  //         console.error("API error:", response.statusText);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error:", error);
  //     });
  // };

  const sendEmail = () => {
    const recipient = "contacts@learnbay.co";
    const subject = "";
    const body = "";
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    // Open Gmail link in a new tab or window
    window.open(gmailLink, "_blank");
  };
  return (
    <div className={styles.consmain}>
      <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        popup={true}
        // radio={radio}
        dataScience={dataScience}
        dataScienceCounselling={dataScienceCounselling}
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "340px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            titleCourse={titleCourse}
            brochureLink={brochureLink}
            brochurePdf={brochurePdf}
            dataScience={dataScience}
            interstedInHide={interstedInHide}
            dataScienceCounselling={dataScienceCounselling}
            upSkillingHide={true}
            // radio={radio}
          />
        </div>
      </Popup>
      <div>
        <h4>Can’t decide which program to opt for?</h4>
        <p className={styles.paraBot}>
          Don’t worry, our expert counsellor is there to guide you make the
          right career choice
        </p>

        <div className={styles.conbtn}>
          <button onClick={openWhatsApp} className={styles.inf}>
            <MdOutlineWhatsappSvg className={styles.conicon} />
            (+91) 77956 87988
          </button>
          <button onClick={sendEmail} className={styles.inf}>
            <AiOutlineMail className={styles.conicon} /> contacts@learnbay.co
          </button>
        </div>

        <div className={styles.consbtn1} onClick={popupShow}>
          <button className={styles.consbtn} onClick={null}>
            Apply for counselling
          </button>
        </div>
      </div>
      <div className={styles.conimg}>
        <Image
          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/fee-newboy.webp"
          width={320}
          height={380}
          alt="contact-counseller"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactCounsellor;
