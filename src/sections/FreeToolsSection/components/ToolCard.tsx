export type ToolCardProps = {
  containerVariant: string;
  iconSrc: string;
  title: string;
  description: string;
  href: string;
  linkText: string;
};

export const ToolCard = (props: ToolCardProps) => {
  return (
    <div
      className={`text-slate-50 bg-slate-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] outline-[3px] border border-slate-800 rounded-xl border-solid ${props.containerVariant}`}
    >
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] p-6">
        <div className="items-center bg-blue-500/10 box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-12 mb-4 rounded-xl">
          <img
            src={props.iconSrc}
            alt="Icon"
            className="text-blue-500 box-border caret-transparent h-6 outline-[3px] w-6"
          />
        </div>
        <div className="text-white text-xl font-semibold box-border caret-transparent tracking-[-0.5px] leading-7 min-h-[auto] min-w-[auto] outline-[3px] mt-1.5">
          {props.title}
        </div>
        <div className="text-slate-400 text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] outline-[3px] mt-1.5">
          {props.description}
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-auto p-6">
        <a
          href={props.href}
          className="text-sm font-medium items-center bg-slate-800 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent gap-x-2 inline-flex h-9 justify-center leading-5 outline-[3px] gap-y-2 text-nowrap w-full px-4 py-2 rounded-[10px] hover:bg-slate-800/80"
        >
          {props.linkText}
        </a>
      </div>
    </div>
  );
};
