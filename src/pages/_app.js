import "@/styles/globals.css";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Georama } from "next/font/google";
import TagManager from "react-gtm-module";
import { PopupProvider, usePopup } from "../context/PopupContext";
import { useRouter } from "next/router";

// Load font dynamically with preload in _document.js for better performance
const georama = Georama({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleScroll = () => {
      TagManager.initialize({ gtmId: "GTM-NN8XWH8" });
      window.removeEventListener("scroll", handleScroll);
    };

    // GTM will load on the first user scroll, instead of waiting 3 seconds
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PopupProvider>
      <main className={georama.className}>
        {/* Lazy-load GTM script */}
        <Script
          strategy="lazyOnload"
          onError={(err) => {
            console.error("Error loading GTM script:", err);
          }}
          onLoad={() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "GTM-NN8XWH8", {
              page_path: window.location.pathname,
            });
          }}
        />
        <ComponentWithPopup Component={Component} pageProps={pageProps} />
      </main>
    </PopupProvider>
  );
};

// Dynamically import the Popup component
const DynamicPopup = dynamic(() => import("../components/Popup/Popup"), {
  ssr: false,
});

const ComponentWithPopup = ({ Component, pageProps }) => {
  const { popup, triggerPopup, closePopup } = usePopup();
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/organic/generic" && router.pathname !== "/submit-info") {
      const timer = setTimeout(() => {
        triggerPopup("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [router.pathname]);

  return (
    <>
      {popup.show && <DynamicPopup message={popup.message} onClose={closePopup} />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
