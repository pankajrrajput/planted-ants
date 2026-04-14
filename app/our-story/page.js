// app/our-story/page.js
import StorySection from "@/components/StorySection";
import ScrollingText from "@/components/ScrollingText";
import TextSliderWithImage from "@/components/TextSliderWithImage";
import MediaWithText from "@/components/MediaWithText";
import AccidentalBeginning from "@/components/AccidentalBeginning";
import ImpactCounterSection from "@/components/ImpactCounterSection";
import PressQuoteSection from "@/components/PressQuoteSection";
import GoingNationalSection from "@/components/GoingNationalSection";
import MediaWithText1 from "@/components/MediaWithText1";
import ScrollingText1 from "@/components/ScrollingText1";
import TimelineSection from "@/components/TimelineSection";
import RevealedImage from "@/components/RevealedImage";
import StartAdventureSection from "@/components/StartAdventureSection";
import NewsletterSection from "@/components/NewsletterSection";


export default function OurStory() {
  return (
    <main className="anchor" id="main" role="main">
        <StorySection />
        <ScrollingText />
        <TextSliderWithImage />
        <MediaWithText />
        <AccidentalBeginning />
        <ImpactCounterSection />
        <PressQuoteSection />
        <GoingNationalSection />
        <MediaWithText1 />
        <ScrollingText1 />
        <TimelineSection />
        <RevealedImage />
        <StartAdventureSection />
        <NewsletterSection />
    </main>

  );
}