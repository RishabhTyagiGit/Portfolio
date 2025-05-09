"use client";

import { useState, useEffect } from "react";
import { Copy, Mail, Phone } from "lucide-react";
// import Link from 'next/link';

import SocialIcons from "@/components/data-display/social-icons";
import Tag from "@/components/data-display/tag";
import IconButton from "@/components/general/icon-button";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import useWindowSize from "@/hooks/use-window-size";
import { copyTextToClipboard } from "@/lib/utils";

let email = "mailtorishabhtyagi@gmail.com";
// Define both phone numbers
let asiaPhone = "+852 98836736";
let globalPhone = "+91 7259616908";

type CopyValue = "email" | "phone";

const ContactSection = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );
  const [isAsiaRegion, setIsAsiaRegion] = useState(false);

  useEffect(() => {
    // Fetch user's location using IP geolocation API
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        // Check if user is from Hong Kong, China, or Macao
        const country = data.country_code;
        setIsAsiaRegion(
          country === "HK" || country === "CN" || country === "MO"
        );
      })
      .catch((error) => {
        console.error("Error fetching location:", error);
        setIsAsiaRegion(false); // Default to global phone on error
      });
  }, []);

  // Get the appropriate phone number based on region
  const phone = isAsiaRegion ? asiaPhone : globalPhone;

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          What&apos;s next? Feel free to reach out to me if you are looking for
          a developer, have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            {/* <Link href={`mailto:${email}`}> */}
            <Typography variant="h2">{email}</Typography>
            {/* </Link> */}
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(email, "email")}
              showTooltip={isCopied && copiedValueType === "email"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            {/* <Link href={`tel:${phone.replace(' ', '')}`}> */}
            <Typography variant="h2">{phone}</Typography>
            {/* </Link> */}
            <IconButton
              size={width && width < 768 ? "md" : "lg"}
              onClick={() => handleCopyClick(phone.replace(" ", ""), "phone")}
              showTooltip={isCopied && copiedValueType === "phone"}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
