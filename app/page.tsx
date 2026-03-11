"use client";

import Header from "./components/Header";
import Timeline from "./components/Timeline";
import FadeIn from "./components/animations/FadeIn";
import Marquee from "./components/Marquee";
import SectionSplitter from "./components/SectionSplitter";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import ReviewSection from "./components/ReviewSection";
import PhotoGallery from "./components/PhotoGallery";

import { ChevronDown, ChevronUp } from "lucide-react";
import AboutMe from "./components/AboutMe";

import { useState } from "react";

// function showAboutMe():
//   | import("react").MouseEventHandler<HTMLButtonElement>
//   | undefined {
//   let aboutme = document.getElementById("AboutMe");
//   aboutme?.className === "hiddem" ? null : null;
//   throw new Error("Function not implemented.");
// }

export default function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="body flex-col min-h-screen justify-center items-center font-sans ">
      <Header />
      <SectionSplitter title="Experience Professionnelle" />
      <FadeIn>
        <ExperienceSection />
      </FadeIn>

      <SectionSplitter title="Les technologies que j'utilise" />
      <Marquee />
      <SectionSplitter title="Mes Projets" />
      <ProjectSection />
      <SectionSplitter title="Des avis 100% satisfaits" />
      <ReviewSection />
      <div className="flex flex-col w-full items-center justify-center my-8">
        En Savoir un peu plus sur moi !
        <button onClick={() => setClicked(!clicked)}>
          {clicked ? <ChevronUp size="48" /> : <ChevronDown size="48" />}
        </button>
      </div>
      <div id="AboutMe" className={clicked ? "flex flex-col" : "hidden"}>
        <SectionSplitter title="Ma vie" />
        {/* <AboutMe /> */}
        <Timeline></Timeline>
        <PhotoGallery />
      </div>
    </div>
  );
}
