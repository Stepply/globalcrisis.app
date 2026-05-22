export const HeaderBrand = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 z-[100] md:gap-x-4 md:gap-y-4">
      <button
        aria-label="Open Menu"
        className="relative text-slate-50 text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-center text-nowrap w-9 z-[100] p-2 rounded-[10px] hover:bg-slate-800/50"
      >
        <img
          src="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 outline-[3px] pointer-events-none text-nowrap w-4"
        />
      </button>
      <a
        href="/"
        className="items-center box-border caret-transparent gap-x-3 flex shrink-0 min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 ml-2"
      >
        <img
          src="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent h-8 outline-[3px] w-8"
        />
        <span className="text-slate-50 text-xl font-bold box-border caret-transparent hidden tracking-[-0.5px] leading-7 min-h-0 min-w-0 outline-[3px] md:block md:min-h-[auto] md:min-w-[auto]">
          G-Wealth
        </span>
      </a>
    </div>
  );
};
