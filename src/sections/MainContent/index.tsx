import { HeroSection } from "@/sections/HeroSection";
import { InteractiveLearningSection } from "@/sections/InteractiveLearningSection";
import { FreeToolsSection } from "@/sections/FreeToolsSection";

export const MainContent = () => {
  return (
    <main className="relative box-border caret-transparent flex basis-[0%] flex-col grow min-h-[auto] min-w-[auto] outline-[3px] w-full z-0">
      <div className="bg-slate-900 box-border caret-transparent min-h-[1000px] min-w-[auto] outline-[3px]">
        <HeroSection />
        <InteractiveLearningSection />
        <FreeToolsSection />
      </div>
    </main>
  );
};
