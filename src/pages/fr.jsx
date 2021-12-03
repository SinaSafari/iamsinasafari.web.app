import React from "react";
import { Hero } from "../components/ui/Hero";
import { Intro } from "../components/ui/Intro";
import { TimeLine } from "../components/ui/timeline";
import { SocialAndContactMe } from "../components/ui/social";
import { UsesThis } from "../components/ui/UsesThis";
import {
  FrHeroContent,
  FrIntroContent,
  FrSocialContent,
  FrTimelineContent,
  FrUsesthisContent,
} from "../data/fr";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center flex-col">
        <Hero data={FrHeroContent} />
        <Intro data={FrIntroContent} />
        <TimeLine data={FrTimelineContent} locale={"fr"} />
        <UsesThis data={FrUsesthisContent} />
        <SocialAndContactMe data={FrSocialContent} />
      </div>
    </>
  );
};

export default HomePage;
