import { HeroBadge } from "@/sections/HeroSection/components/HeroBadge";
import { HeroActions } from "@/sections/HeroSection/components/HeroActions";

export const HeroSection = () => {
  return (
    <section className="relative items-center box-border caret-transparent flex justify-center min-h-[900px] outline-[3px] overflow-hidden">
      <div className="absolute box-border caret-transparent outline-[3px] z-0 inset-0">
        <div className="absolute bg-[radial-gradient(rgba(60,131,246,0.1),rgb(15,23,41),rgb(15,23,41))] box-border caret-transparent outline-[3px] inset-0"></div>
      </div>
      <div className="relative box-border caret-transparent max-w-screen-xl min-h-[auto] min-w-[auto] outline-[3px] text-center z-10 mx-auto px-4 py-20 md:px-8">
        <div className="box-border caret-transparent outline-[3px]">
          <HeroBadge />
          <h1 className="text-slate-50 text-5xl font-black box-border caret-transparent tracking-[-2.4px] leading-[60px] outline-[3px] my-6 font-outfit md:text-7xl md:tracking-[-3.6px] md:leading-[72px]">
            The Seven Pillars of the World{" "}
            <br className="text-5xl box-border caret-transparent tracking-[-2.4px] leading-[60px] outline-[3px] md:text-7xl md:tracking-[-3.6px] md:leading-[72px]" />
            <span className="text-red-500 text-5xl box-border caret-transparent tracking-[-2.4px] leading-[60px] outline-[3px] md:text-7xl md:tracking-[-3.6px] md:leading-[72px]">
              Now the 8th Pillar
            </span>
          </h1>
          <p className="text-slate-50/80 text-xl font-medium box-border caret-transparent leading-7 max-w-screen-md outline-[3px] mb-4 mx-auto md:text-2xl md:leading-8">
            If You Don&#39;t Believe Us, Believe the Events You Know Already
          </p>
          <p className="text-slate-400 text-lg box-border caret-transparent leading-7 max-w-2xl outline-[3px] mb-12 mx-auto">
            A Deep-Time Scientific Model of Civilization-Altering Events
            (1989-2040) That Speaks English. Explore our open-access tools to
            understand the convergence.
          </p>
          <HeroActions />
        </div>
      </div>
    </section>
  );
};
