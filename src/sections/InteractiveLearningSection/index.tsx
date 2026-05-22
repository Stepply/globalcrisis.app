import { InteractiveLearningHeader } from "@/sections/InteractiveLearningSection/components/InteractiveLearningHeader";
import { LearningCard } from "@/sections/InteractiveLearningSection/components/LearningCard";

export const InteractiveLearningSection = () => {
  return (
    <section className="relative bg-slate-900 box-border caret-transparent outline-[3px] border-slate-800 py-24 border-t border-solid">
      <div className="box-border caret-transparent max-w-screen-xl outline-[3px] mx-auto px-4 md:px-8">
        <InteractiveLearningHeader />
        <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-6 md:grid-cols-[repeat(6,minmax(0px,1fr))]">
          <LearningCard
            cardClassName="md:col-end-[span_3] md:col-start-[span_3]"
            iconWrapperClassName="bg-blue-500/10"
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-7.svg"
            iconClassName="text-blue-500 box-border caret-transparent h-6 outline-[3px] w-6"
            title="NKo System Overview"
            titleClassName="text-2xl tracking-[-0.6px] leading-8"
            description="Understand the core variables of global stability: Network Density, Knowledge, and Efficiency."
            descriptionClassName=""
            previewClassName="relative items-center bg-slate-800/30 flex h-12 w-full border border-slate-800 overflow-hidden px-4 rounded-xl border-solid"
            previewContent={
              <>
                <div className="absolute bg-blue-500/20 box-border caret-transparent outline-[3px] w-3/5 left-0 inset-y-0"></div>
                <div className="absolute bg-blue-500 box-border caret-transparent h-3 outline-[3px] translate-x-[-50.0%] w-3 rounded-full left-[60%]"></div>
                <span className="relative text-slate-400 text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] outline-[3px] z-10 ml-auto">
                  Interactive Slider Preview
                </span>
              </>
            }
            href="/nko-system-overview"
          />
          <LearningCard
            cardClassName="md:col-end-[span_3] md:col-start-[span_3]"
            iconWrapperClassName=""
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-8.svg"
            iconClassName="box-border caret-transparent h-6 outline-[3px] w-6"
            title="The Seven Pillars"
            titleClassName="text-2xl tracking-[-0.6px] leading-8"
            description="Dive deep into the 7 foundational vectors accelerating toward the crisis and test your knowledge."
            descriptionClassName=""
            previewClassName="gap-x-2 flex justify-center gap-y-2"
            previewContent={
              <>
                <div className="text-slate-400 text-xs font-bold items-center bg-slate-800 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] w-8 border border-slate-800 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                  P1
                </div>
                <div className="text-slate-400 text-xs font-bold items-center bg-slate-800 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] w-8 border border-slate-800 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                  P2
                </div>
                <div className="text-slate-400 text-xs font-bold items-center bg-slate-800 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] w-8 border border-slate-800 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                  P3
                </div>
                <div className="text-slate-400 text-xs font-bold items-center bg-slate-800 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] w-8 border border-slate-800 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                  P4
                </div>
                <div className="text-slate-400 text-xs font-bold items-center bg-slate-800 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] w-8 border border-slate-800 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                  P5
                </div>
                <div className="text-slate-400 text-xs font-bold items-center bg-slate-800 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] w-8 border border-slate-800 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                  P6
                </div>
                <div className="text-slate-400 text-xs font-bold items-center bg-slate-800 box-border caret-transparent flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] w-8 border border-slate-800 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
                  P7
                </div>
              </>
            }
            href="/seven-pillars"
          />
          <LearningCard
            cardClassName="md:col-end-[span_2] md:col-start-[span_2]"
            iconWrapperClassName=""
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-9.svg"
            iconClassName="box-border caret-transparent h-6 outline-[3px] w-6"
            title="NKo Grid Blocks"
            titleClassName="text-xl tracking-[-0.5px] leading-7"
            description="Visualize systemic fragility across a 6x6 matrix of global infrastructure nodes."
            descriptionClassName="text-sm leading-5"
            previewClassName="aspect-square gap-x-1 grid grid-cols-[repeat(6,minmax(0px,1fr))] max-w-[120px] gap-y-1 w-full mx-auto"
            previewContent={
              <div className="aspect-square box-border caret-transparent gap-x-1 grid grid-cols-[repeat(6,minmax(0px,1fr))] max-w-[120px] outline-[3px] gap-y-1 w-full mb-6 mx-auto">
                <div className="bg-red-500/50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="bg-red-500/50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="bg-red-500/50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="bg-red-500/50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="bg-red-500/50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
                <div className="bg-red-500/50 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] rounded-lg"></div>
              </div>
            }
            href="/nko-grid-blocks"
          />
          <LearningCard
            cardClassName="md:col-end-[span_2] md:col-start-[span_2]"
            iconWrapperClassName="bg-blue-500/10"
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-10.svg"
            iconClassName="text-blue-500 box-border caret-transparent h-6 outline-[3px] w-6"
            title="Bifurcation Theory"
            titleClassName="text-xl tracking-[-0.5px] leading-7"
            description="Learn how systems under extreme pressure split into divergent, irreversible outcomes."
            descriptionClassName="text-sm leading-5"
            previewClassName="relative items-center flex h-24 justify-center w-full"
            previewContent={
              <img
                src="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-11.svg"
                alt="Icon"
                className="box-border caret-transparent h-full outline-[3px] w-full"
              />
            }
            href="/bifurcation-explained"
          />
          <LearningCard
            cardClassName="md:col-end-[span_2] md:col-start-[span_2]"
            iconWrapperClassName="bg-red-500/10"
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-12.svg"
            iconClassName="text-red-500 box-border caret-transparent h-6 outline-[3px] w-6"
            title="Crisis Convergence"
            titleClassName="text-xl tracking-[-0.5px] leading-7"
            description="See how historical crises overlap to create the ultimate 2040 convergence event."
            descriptionClassName="text-sm leading-5"
            previewClassName="relative items-center flex h-24 justify-center w-full"
            previewContent={
              <>
                <div className="absolute box-border caret-transparent h-16 outline-[3px] w-16 border-red-500/30 rounded-full border-2 border-solid"></div>
                <div className="absolute box-border caret-transparent h-12 outline-[3px] w-12 border-red-500/60 rounded-full border-2 border-solid"></div>
                <div className="absolute text-white text-[8px] font-bold items-center bg-red-500 box-border caret-transparent flex h-8 justify-center leading-3 outline-[3px] w-8 rounded-full">
                  2040
                </div>
              </>
            }
            href="/crisis-convergence"
          />
        </div>
      </div>
    </section>
  );
};
