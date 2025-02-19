"use client";

import Button from "@/components/general/button";
import { useEffect, useState } from "react";

const DownloadCV = () => {
  const [isAsiaRegion, setIsAsiaRegion] = useState(false);

  useEffect(() => {
    // Fetch user's location using a free IP geolocation API
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        // Check if user is from Hong Kong or China
        const country = data.country_code;
        setIsAsiaRegion(country === "HK" || country === "CN");
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
        setIsAsiaRegion(false); // Default to non-Asia version on error
      });
  }, []);

  const handleDownload = () => {
    const resumePath = isAsiaRegion
      ? "/files/Rishabh_Tyagi_Resume_HK.pdf"
      : "/files/Rishabh_Tyagi_Resume.pdf";
    window?.open(resumePath, "_blank");
  };

  return <Button onClick={handleDownload}>Download CV</Button>;
};

export default DownloadCV;
