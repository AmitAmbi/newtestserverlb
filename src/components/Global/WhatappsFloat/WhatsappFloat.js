import React, { useState,} from "react";
import styles from "../../../styles/Home.module.css";
import {  FaWhatsapp } from "react-icons/fa";
import Link from "next/link";


function WhatsappFloat({ chat360code1 }) {
  const [showButtons, setShowButtons] = useState(false);
  // const [iconClicked, setIconClicked] = useState(false);

  // const toggleButtons = () => {
  //   setShowButtons(!showButtons);
  // };

  // const handleIconClick = () => {
  //   if (iconClicked) {
  //     // If icon is already clicked, reset to original state
  //     setIconClicked(false);
  //     setShowButtons(false);
  //   } else {
  //     // If icon is not clicked, toggle the buttons
  //     setIconClicked(true);
  //     toggleButtons();
  //   }
  // };
  return (
    <>
      {chat360code1 ? (
        <Link
          href="https://api.whatsapp.com/send?phone=917349222263"
          target="_blank"
        >
          <div className={styles.FloatWhatsapp}>
            <FaWhatsapp className={styles.whatsappIcon} />
          </div>
        </Link>
      ) : (
        // <div className={styles.ChatIcon}>
        //   <div
        //     className={styles.buttonMain}
        //     onClick={iconClicked ? handleIconClick : toggleButtons}
        //   >
        //     {showButtons && (
        //       <div className={styles.buttonContainer}>
        //         <div>
        //           <IoIosCall className={styles.SecondIcons} />
        //         </div>
        //         <div>
        //           <FaWhatsapp className={styles.SecondIcons} />
        //         </div>
        //       </div>
        //     )}
        //     {iconClicked ? (
        //       <IoClose
        //         className={styles.ChatIcon}
        //         onClick={handleIconClick}
        //       />
        //     ) : (
        //       <IoChatbubblesOutline
        //         className={styles.ChatIcon}
        //         onClick={handleIconClick}
        //       />
        //     )}
        //   </div>
        // </div>
        <Link
          href="https://api.whatsapp.com/send?phone=917349222263"
          target="_blank"
        >
          <div className={styles.FloatWhatsapp}>
            <FaWhatsapp className={styles.whatsappIcon} />
          </div>
        </Link>
      )}
    </>
  );
}

export default React.memo(WhatsappFloat);
