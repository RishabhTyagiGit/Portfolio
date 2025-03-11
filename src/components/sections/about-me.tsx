import Image from "next/image";

import RishabhFullPose from "/public/images/rishabh-full-pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS, SOCIAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={RishabhFullPose}
              alt="Fullpose of Rishabh"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I&apos;m a passionate web developer who specializes in building
            high-performance and secure web applications. I thrive on crafting
            seamless digital experiences, ensuring that every application I
            build is optimized, secure, and user-friendly. Performance,
            scalability, and maintainability are at the core of my development
            approach.
          </Typography>
          <Typography>
            I started my web development journey 7 years ago, working across
            startups and enterprises like Netflix, where I built and optimized
            large-scale applications. Over the years, I&apos;ve continually
            evolved, taking on new challenges and mastering modern web
            technologies such as React, Next.js, NextAuth, ImageKit (for DAM),
            Contentful (for CMS), Tailwind CSS, JavaScript, and TypeScript.
          </Typography>
          <Typography>
            I enjoy working on products end to end, from ideation to
            development, and I always strive to follow gold-standard web
            security practices to ensure applications are robust and reliable.
          </Typography>
          <Typography>
            When I&apos;m not in full-on developer mode, you can find me
            exploring new technologies, engaging with the dev community, or
            catching up on the latest trends in startups and web security. You
            can connect with me on
            <Link
              noCustomization
              externalLink
              withUnderline
              href={SOCIAL_LINKS[1].url}
            >
              {" "}
              LinkedIn
            </Link>
            .
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex flex-col gap-2">
              <Typography component="li" className="flex items-start">
                <span className="mr-2">•</span>
                <span>B.Tech. in Computer Science</span>
              </Typography>
              <Typography component="li" className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Experienced in both startup & enterprise environments
                </span>
              </Typography>
            </ul>
            <ul className="flex flex-col gap-2">
              <Typography component="li" className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Passionate about performance, security, and clean code
                </span>
              </Typography>
              <Typography component="li" className="flex items-start">
                <span className="mr-2">•</span>
                <span>Avid learner & tech enthusiast</span>
              </Typography>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
