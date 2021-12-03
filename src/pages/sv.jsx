import React from "react";
import { Hero } from "../components/ui/Hero";
import { Intro } from "../components/ui/Intro";
import { TimeLine } from "../components/ui/timeline";
import { SocialAndContactMe } from "../components/ui/social";
import { UsesThis } from "../components/ui/UsesThis";
import {
  SvHeroContent,
  SvIntroContent,
  SvSocialContent,
  SvTimelineContent,
  SvUsesthisContent,
} from "../data/sv";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <Hero data={SvHeroContent} />
        <Intro data={SvIntroContent} />
        <TimeLine data={SvTimelineContent} locale={"sv"} />
        <UsesThis data={SvUsesthisContent} />
        <SocialAndContactMe data={SvSocialContent} />
      </div>
    </>
  );
};

export default HomePage;
