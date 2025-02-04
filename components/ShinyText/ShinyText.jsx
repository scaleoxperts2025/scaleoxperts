import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../ui/animated-shiny-text";

export const ShinyText = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-xs xs:text-sm sm:text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <div className="inline-flex items-center justify-center px-3 xs:px-4 py-1">
          <AnimatedShinyText className="whitespace-nowrap">
            <span className="text-xs xs:text-sm sm:text-base">
              ✨ Best Digital Marketing Agency Globally
            </span>
          </AnimatedShinyText>
          <ArrowRightIcon className="ml-1 xs:ml-2 h-3 w-3 xs:h-4 xs:w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );
};

export default ShinyText;