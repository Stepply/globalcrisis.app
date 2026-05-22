import { Header } from "@/sections/Header";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";
import { EmptySection } from "@/sections/EmptySection";

export const PageLayout = () => {
  return (
    <div className="box-border caret-transparent outline-[3px]">
      <div className="relative bg-slate-900 box-border caret-transparent flex flex-col min-h-[1000px] outline-[3px] w-full">
        <Header />
        <MainContent />
        <Footer />
      </div>
      <EmptySection />
    </div>
  );
};
