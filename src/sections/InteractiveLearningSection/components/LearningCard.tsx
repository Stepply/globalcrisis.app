export type LearningCardProps = {
  cardClassName: string;
  iconWrapperClassName: string;
  iconSrc: string;
  iconClassName: string;
  title: string;
  titleClassName: string;
  description: string;
  descriptionClassName: string;
  previewClassName: string;
  previewContent: React.ReactNode;
  href: string;
};

export const LearningCard = (props: LearningCardProps) => {
  return (
    <div
      className={`text-slate-50 bg-slate-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent flex flex-col col-end-auto col-start-auto h-full min-h-[auto] min-w-[auto] outline-[3px] border border-slate-800 rounded-xl border-solid ${props.cardClassName}`}
    >
      <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] p-6">
        <div
          className={`items-center box-border caret-transparent flex h-12 justify-center min-h-[auto] min-w-[auto] outline-[3px] w-12 mb-4 rounded-xl ${props.iconWrapperClassName}`}
        >
          <img src={props.iconSrc} alt="Icon" className={props.iconClassName} />
        </div>
        <div
          className={`text-white font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-1.5 ${props.titleClassName}`}
        >
          {props.title}
        </div>
        <div
          className={`text-slate-400 box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-1.5 ${props.descriptionClassName}`}
        >
          {props.description}
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] mt-auto p-6">
        <div
          className={`box-border caret-transparent outline-[3px] mb-6 ${props.previewClassName}`}
        >
          {props.previewContent}
        </div>
        <a
          href={props.href}
          className="text-sm font-medium items-center bg-slate-800 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent gap-x-2 inline-flex h-9 justify-center leading-5 outline-[3px] gap-y-2 text-nowrap w-full px-4 py-2 rounded-[10px] hover:bg-slate-800/80"
        >
          Explore Full Page
        </a>
      </div>
    </div>
  );
};
