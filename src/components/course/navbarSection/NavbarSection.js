import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./NavbarSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { menuItem } from "./NavbarData";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Form from "@/components/Global/Form/Form";
import Popup from "@/components/Global/Popup/Popup";

const Tabs = dynamic(() => import("@/components/Global/Tabs/Tabs"));

function NavbarSection({
  radio,
  dataScience,
  fullStack,
  dataScienceCounselling,
  adPage,
  dataScienceGeneric,
  interstedInHide,
}) {
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);
  const [popups, setPopups] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };

  const handleIcon = (data) => {
    setIcon(data);
  };

  const toggleMenu = () => {
    setIcon(!icon);
    setShow(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <section className={`${styles.nav} flexBox flexJustSpaceBetween flexAlignCenter`}>
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="leftPopup">
          <div className="whiteP" />
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            popup={true}
            setTrigger={setPopups}
            radio={radio}
            fullStack={fullStack}
            dataScience={dataScience}
            dataScienceGeneric={dataScienceGeneric}
            dataScienceCounselling={dataScienceCounselling}
            upSkillingHide={true}
            interstedInHide={interstedInHide}
          />
        </div>
      </Popup>

      {icon && (
        <div
          className={styles.megaMenu}
          onMouseOver={() => setIcon(true)}
          onMouseLeave={() => setIcon(false)}
        >
          <Tabs handleIcon={handleIcon} className={styles.tabs} />
        </div>
      )}
           
           <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
              <FaBars />
            </div>
            <div className={styles.logoMBL}>
              <Link href="/">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
                  alt="Learnbay"
                  quality={100}
                  width="170"
                  height={60}
                  loading="lazy"
                />
              </Link>
            </div>


      <div className="containerWidth">
     
        <div className={styles.innerDiv}>

          <div className={styles.firstSection}>
         
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
                  alt="Learnbay"
                  quality={100}
                  width="170"
                  height={60}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className={styles.blueButton} onMouseEnter={() => setIcon(true)} onClick={toggleMenu}>
              Course {icon ? <FaChevronUp /> : <FaChevronDown />}
            </div>

          
            {/* Hamburger Icon */}
         
           
          </div>
          <div className={styles.secondSection}>
            <div className={`${styles.menuItems} ${styles.menuItemsDesktop}`}>
              {menuItem.map((data) => {
                const { id, name, url } = data;
                return (
                  <span key={id}>
                    <Link href={url}>{name}</Link>
                  </span>
                );
              })}
            </div>
            <div className={styles.orangeButton} onClick={popupShow}>
              Apply for Counselling
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blueButtonMBL} onMouseEnter={() => setIcon(true)} onClick={toggleMenu}>
              Course {icon ? <FaChevronUp /> : <FaChevronDown />}
            </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {menuItem.map((data) => {
            const { id, name, url } = data;
            return (
              <span key={id}>
                <Link href={url}>{name}</Link>
              </span>
              
            );
            
          })}
        </div>
      )}
    </section>
  );
}

export default React.memo(NavbarSection);
