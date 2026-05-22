import { HeaderBrand } from "@/sections/Header/components/HeaderBrand";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Header = () => {
  return (
    <header className="sticky backdrop-blur bg-slate-900/80 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] w-full z-50 border-slate-800 border-b border-solid top-0">
      <div className="box-border caret-transparent max-w-screen-xl outline-[3px] mx-auto px-4 md:px-8">
        <div className="items-center box-border caret-transparent gap-x-4 flex h-16 justify-between outline-[3px] gap-y-4">
          <HeaderBrand />
          <DesktopNavigation />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};
