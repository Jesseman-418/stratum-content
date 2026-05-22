import { NavV2 } from "@/components/v2/nav";
import { HeroV2 } from "@/components/v2/hero";
import { EditorsNoteV2 } from "@/components/v2/editors-note";
import { PitchV2 } from "@/components/v2/pitch";
import { ProcessV2 } from "@/components/v2/process";
import { EditionsV2 } from "@/components/v2/editions";
import { FeaturesV2 } from "@/components/v2/features";
import { SubscribeV2 } from "@/components/v2/subscribe";
import { ColophonV2 } from "@/components/v2/colophon";

export default function Home() {
  return (
    <>
      <NavV2 />
      <main className="flex-1">
        <HeroV2 />
        <EditorsNoteV2 />
        <PitchV2 />
        <ProcessV2 />
        <EditionsV2 />
        <FeaturesV2 />
        <SubscribeV2 />
      </main>
      <ColophonV2 />
    </>
  );
}
