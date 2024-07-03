import React, { useState, useEffect } from "react";
import styles from "./styles.module.css"; // Import CSS Modules styles

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener to show/hide button
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div className={styles.scrollToTop} onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M9.99844 19.2344C10.1762 19.2344 10.3207 19.1788 10.4318 19.0677C10.5429 18.9566 10.5984 18.8122 10.5984 18.6344V3.90104L14.5318 7.83437C14.6651 7.96771 14.8207 8.03437 14.9984 8.03437C15.1762 8.03437 15.3207 7.96771 15.4318 7.83437C15.5429 7.70104 15.5984 7.54549 15.5984 7.36771C15.5984 7.18993 15.554 7.03437 15.4651 6.90104L10.4651 1.90104C10.3318 1.81215 10.1762 1.76771 9.99844 1.76771C9.82066 1.76771 9.6651 1.81215 9.53177 1.90104L4.53177 6.90104C4.44288 7.03437 4.39844 7.18993 4.39844 7.36771C4.39844 7.54549 4.45399 7.70104 4.5651 7.83437C4.67622 7.96771 4.82066 8.03437 4.99844 8.03437C5.17622 8.03437 5.33177 7.96771 5.4651 7.83437L9.39844 3.90104V18.6344C9.39844 18.8122 9.45399 18.9566 9.5651 19.0677C9.67622 19.1788 9.82066 19.2344 9.99844 19.2344Z"
              fill="white"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
