import { cn } from "@/src/utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  animate
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-black border-white/[0.2] border justify-center flex flex-col items-center bg-center bg-origin-border ",
        className
      )}
    // style={{ backgroundImage: `url(${image})` }}
    >
      
      {
        animate &&
        <div className="my-[-30px]">
          <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>

          <iframe src="https://lottie.host/embed/26f749bb-df44-4c8c-a00f-cdcde52b2cb6/2sc2oT6Smy.json"></iframe>
        </div>
      }
      <div className="group-hover/bento:translate-x-2 transition duration-200">

        {icon}
        <div className="font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-xs text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
