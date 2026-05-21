import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Video } from "@/components/video";
import { HowItWorks } from "@/components/how-it-works";
import { Tiers } from "@/components/tiers";
import { Operator } from "@/components/operator";
import { Stories } from "@/components/stories";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Video />
        <HowItWorks />
        <Tiers />
        <Operator />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
