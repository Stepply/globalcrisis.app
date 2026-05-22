export const HeroBadge = () => {
  return (
    <div className="text-red-500 items-center bg-red-500/10 box-border caret-transparent gap-x-2 inline-flex outline-[3px] gap-y-2 border border-red-500/20 mb-8 px-4 py-2 rounded-full border-solid">
      <img
        src="https://c.animaapp.com/mpgucdl0odwy8b/assets/icon-4.svg"
        alt="Icon"
        className="box-border caret-transparent h-4 outline-[3px] w-4"
      />
      <span className="text-sm font-semibold box-border caret-transparent block tracking-[0.35px] leading-5 min-h-[auto] min-w-[auto] outline-[3px] uppercase">
        Urgent: 2040 Global Financial Crisis
      </span>
    </div>
  );
};
