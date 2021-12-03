import React from "react";
import { Hero } from "../components/ui/Hero";
import { Intro } from "../components/ui/Intro";
import { TimeLine } from "../components/ui/timeline";
import { SocialAndContactMe } from "../components/ui/social";
import { UsesThis } from "../components/ui/UsesThis";
import {
  EnHeroContent,
  EnIntroContent,
  EnSocialContent,
  EnTimelineContent,
  EnUsesthisContent,
} from "../data/en";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <Hero data={EnHeroContent} />
        <Intro data={EnIntroContent} />
        <TimeLine data={EnTimelineContent} locale={"en"} />
        <UsesThis data={EnUsesthisContent} />
        <SocialAndContactMe data={EnSocialContent} />
      </div>
    </>
  );
};

export default HomePage;
