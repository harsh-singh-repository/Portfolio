import { Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const ToolboxComponent = ({
  toolBoxItems,
  classname,
  itemWrapperClassname
}: {
  toolBoxItems: {
    title: string;
    iconType: ReactNode;
}[];
   classname?:string,
   itemWrapperClassname?:string,
}) => {
  return (
    <>
      <div className={twMerge("flex  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",classname)}>
        <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6",itemWrapperClassname)}>
         {[...new Array(2)].fill(0).map((_,index)=>(
          <Fragment key={index}>
             {toolBoxItems.map((item) => (
            <div
              key={item.title}
              className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
            >
              <div className="size-10">{item.iconType}</div>
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
          </Fragment>
         ))}
        </div>
      </div>
    </>
  );
};
