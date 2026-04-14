import ProductPage from "@/components/ProductPageSec";
import AboutMiniRubyAnts from "@/components/AboutMiniRubyAnts";
import AntSpotlightSection from "@/components/AntSpotlightSection";
import ImpactStatsSection from "@/components/ImpactStatsSection";
import MultipleImagesWithTextSlider from "@/components/MultipleImagesWithTextSection";
import IncludedPackageSection from "@/components/IncludedPackageSection";
import ScrollingText2 from "@/components/ScrollingText2";
import TimelineSlider from "@/components/TimelineSlider";
import ProductSecondSec from "@/components/ProductSecondSec";
import ProductFaqSection from "@/components/ProductFaqSection";
import WhyBuySection from "@/components/WhyBuySection";
import AntCityBanner from "@/components/AntCityBanner";

export default function OurStory() {
  return (
    <main className="anchor" id="main" role="main">
        <ProductPage />
        <AboutMiniRubyAnts />
        <AntSpotlightSection />
        <ImpactStatsSection />
        <MultipleImagesWithTextSlider />
        <IncludedPackageSection />
        <ScrollingText2 />
        <TimelineSlider />
        <ProductSecondSec />
        <ProductFaqSection />
        <WhyBuySection />
        <AntCityBanner />
    </main>

  );
}