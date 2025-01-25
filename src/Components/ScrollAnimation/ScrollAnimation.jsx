import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ScrollAnimation ({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 600, 
      once: true, 
    });
  }, []);

  return (
    <div data-aos="fade-up">
      {children}
    </div>
  );
}
