import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Responsive",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintanable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <>
      <section className="py-16 lg:py-24 -mx-1">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment>
                  {words.map((word) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="uppercase text-gray-900 font-extrabold text-sm ">
                        {word}
                      </span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
