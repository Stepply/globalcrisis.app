export const DesktopNavigation = () => {
  return (
    <nav className="absolute items-center box-border caret-transparent gap-x-6 hidden outline-[3px] gap-y-6 transform-none left-2/4 md:flex md:translate-x-[-50.0%]">
      <button
        type="button"
        className="text-slate-400 text-sm font-medium items-center bg-transparent caret-transparent gap-x-1 flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 gap-y-1 text-center p-0 md:min-h-[auto] md:min-w-[auto] hover:text-slate-50"
      >
        Learn{" "}
        <img
          src="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] w-4"
        />
      </button>
      <button
        type="button"
        className="text-slate-400 text-sm font-medium items-center bg-transparent caret-transparent gap-x-1 flex leading-5 min-h-0 min-w-0 outline-transparent outline-offset-2 outline outline-2 gap-y-1 text-center p-0 md:min-h-[auto] md:min-w-[auto] hover:text-slate-50"
      >
        Calculators{" "}
        <img
          src="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 outline-[3px] w-4"
        />
      </button>
    </nav>
  );
};
