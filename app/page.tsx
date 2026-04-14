import Image from "next/image";
import Banner from '../components/Banner';
import RichTextSection from '../components/RichTextSection';
import ImagesWithTextSection from '../components/ImagesWithTextSection';
import MultipleImagesWithText from '../components/MultipleImagesWithText';
import ImpactSection from '../components/ImpactSection';
import FeaturedCollection from '../components/FeaturedCollection';
import AntSuppliesCarousel from '../components/AntSuppliesCarousel';
import PressCarousel from '../components/PressCarousel';
import HotspotImage from '../components/HotspotImage';
import CareGuidesCarousel from '../components/CareGuidesCarousel';
import HeroBanner from '../components/HeroBanner';
import WhyKeepAnts from '../components/WhyKeepAnts';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';


export default function Home() {
  return (
    <main className="anchor" id="main" role="main">
      <Banner />
      <RichTextSection />
      <ImagesWithTextSection />
      <MultipleImagesWithText />
      <ImpactSection />
      <FeaturedCollection />
      <AntSuppliesCarousel />
      <PressCarousel />
      <HotspotImage />
      <CareGuidesCarousel />
      <HeroBanner />
      <WhyKeepAnts />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
