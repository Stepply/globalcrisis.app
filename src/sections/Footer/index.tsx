import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="text-slate-50 bg-slate-900 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] border-slate-800 mt-20 border-t border-solid">
      <div className="box-border caret-transparent max-w-screen-xl outline-[3px] mx-auto px-4 py-12 md:px-8">
        <div className="items-center box-border caret-transparent gap-x-6 flex flex-col justify-between outline-[3px] gap-y-6 md:flex-row">
          <FooterBrand />
          <FooterLinks />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
