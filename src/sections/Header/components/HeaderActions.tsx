export const HeaderActions = () => {
  return (
    <div className="relative items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-3 z-50 md:gap-x-4 md:gap-y-4">
      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 md:gap-x-4 md:gap-y-4">
        <a
          href="/login"
          className="text-slate-50/70 text-sm font-medium box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] outline-[3px] px-2 py-1 hover:text-slate-50"
        >
          Login
        </a>
        <a
          href="/signup"
          className="text-slate-50 text-xs font-medium items-center bg-blue-500 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent gap-x-2 flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] outline-[3px] gap-y-2 text-nowrap px-3 rounded-[10px] hover:bg-blue-500/90"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};
