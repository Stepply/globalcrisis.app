import { FreeToolsHeader } from "@/sections/FreeToolsSection/components/FreeToolsHeader";
import { ToolCard } from "@/sections/FreeToolsSection/components/ToolCard";

export const FreeToolsSection = () => {
  return (
    <section className="relative bg-slate-800/30 box-border caret-transparent outline-[3px] border-slate-800 py-24 border-t border-solid">
      <div className="box-border caret-transparent max-w-screen-xl outline-[3px] mx-auto px-4 md:px-8">
        <FreeToolsHeader />
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] outline-[3px] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
          <ToolCard
            containerVariant=""
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-13.svg"
            title="Crisis Impact Assessment"
            description="Calculate your personal or organizational vulnerability score based on current assets and sector exposure."
            href="/crisis-impact-calculator"
            linkText="Run Assessment"
          />
          <ToolCard
            containerVariant=""
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-14.svg"
            title="Bifurcation Scenario Planner"
            description="Model different economic and geopolitical outcomes leading up to 2040 to see how variables interact."
            href="/bifurcation-scenario-planner"
            linkText="Build Scenario"
          />
          <ToolCard
            containerVariant="col-end-auto col-start-auto md:col-end-[span_1] md:col-start-[span_1]"
            iconSrc="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-15.svg"
            title="Wealth Resilience"
            description="Evaluate your financial runway and diversification adequacy against hyperinflation and asset seizure risks."
            href="/wealth-resilience-calculator"
            linkText="Test Resilience"
          />
        </div>
      </div>
    </section>
  );
};
