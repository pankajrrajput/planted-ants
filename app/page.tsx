import Image from "next/image";
import Banner from '../components/Banner';
import RichTextSection from '../components/RichTextSection';

export default function Home() {
  return (
    <main className="anchor" id="main" role="main">
      <Banner />
      <RichTextSection />
    </main>
  );
}
