export const HeroActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center outline-[3px] gap-y-4 md:flex-row">
      <a
        href="#calculators"
        className="text-slate-50 text-lg font-medium items-center bg-blue-500 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(60,131,246,0.2)_0px_10px_15px_-3px,rgba(60,131,246,0.2)_0px_4px_6px_-4px] box-border caret-transparent gap-x-2 flex h-14 justify-center leading-7 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-nowrap px-8 rounded-[10px] hover:bg-blue-500/90"
      >
        Explore Free Tools
        <img
          src="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 outline-[3px] pointer-events-none text-nowrap w-4 ml-2"
        />
      </a>
      <a
        href="#education"
        className="text-lg font-medium items-center bg-slate-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent gap-x-2 flex h-14 justify-center leading-7 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-nowrap border border-slate-800 px-8 rounded-[10px] border-solid hover:text-slate-50 hover:bg-blue-500"
      >
        Learn the Theory
      </a>
    </div>
  );
};
