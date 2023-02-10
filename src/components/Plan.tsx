import { FC, MouseEvent } from "react";

type props = {
  name: string;
  price: number;
  img: string;
  type: "monthly" | "yearly";
  active: boolean;
  monthsFree?: number;
  handlePlan: (_: string, __: string | number) => void;
};

export const Plan: FC<props> = ({
  name,
  price,
  img,
  type,
  active,
  handlePlan,
  monthsFree,
}) => {
  const togglePlan = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // because of the event bubbling with the next step btn
    handlePlan("plan", name.toLowerCase());
    handlePlan("pricePlan", price);
  };

  return (
    <button
      className={
        "border border-n-light-gray rounded-md p-4 flex lg:flex-col gap-4 lg:gap-2 items-center hover:opacity-70 lg:w-1/3 " +
        (active ? " border-p-purplish-blue bg-n-alabaster" : "")
      }
      data-testid={`plan-${name}`}
      onClick={(e) => togglePlan(e)}
    >
      <div className="lg:w-14 lg:h-14 lg:mb-5 lg:self-start">
        <img alt="" src={img} />
      </div>
      <div className="flex flex-col items-start lg:gap-1 lg:self-start">
        <h2 className="font-bold text-p-marine-blue text-lg lg:text-base">
          {name}
        </h2>
        <p className="text-base text-n-cool-gray lg:text-sm">
          {type === "monthly" ? `$${price}/mo` : `$${price}/yr`}
        </p>
        <p
          className={
            "text-xs font-bold text-p-marine-blue " +
            (type === "yearly" ? "opacity-100" : "opacity-0")
          }
        >
          {monthsFree} months free
        </p>
      </div>
    </button>
  );
};
