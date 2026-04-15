"use client";

import Header from "../components/Header";
import Timeline from "../components/Timeline";
import FadeIn from "../components/animations/FadeIn";
import Marquee from "../components/Marquee";
import SectionSplitter from "../components/SectionSplitter";
import ProjectSection from "../components/ProjectSection";
import ExperienceSection from "../components/ExperienceSection";
import ReviewSection from "../components/ReviewSection";
import PhotoGallery from "../components/PhotoGallery";
import { Experience } from "@/types/experience";

import { ChevronDown, ChevronUp } from "lucide-react";
import AboutMe from "../components/AboutMe";

import { useState } from "react";
import Form from "../components/Form";
import ExperienceModal from "@/components/ExperienceModal";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  return (
    <div
      className={`body flex-col min-h-screen justify-center items-center font-sans ${selectedExperience ? "blur-xs" : ""}`}
    >
      <Header />
      <SectionSplitter title="Experience Professionnelle" />
      <FadeIn>
        <ExperienceSection
          selectedExperience={selectedExperience}
          onSelect={setSelectedExperience}
        />
      </FadeIn>

      <SectionSplitter title="Les technologies que j'utilise" />
      <Marquee />
      <SectionSplitter title="Mes Projets" />
      <ProjectSection />
      {/* <SectionSplitter title="Des avis 100% satisfaits" />
      <ReviewSection /> */}
      <SectionSplitter title="Me contacter" />
      <Form />
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

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </div>
  );
}
