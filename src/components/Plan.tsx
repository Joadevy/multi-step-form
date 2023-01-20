import { ChangeEventHandler, FC } from "react";

type props = {
  name: string;
  price: number;
  img: string;
  type: "monthly" | "yearly";
  active: boolean;
  handlePlan: (_: string, __: string) => void;
  //   handlePlan: (_: any) => ChangeEventHandler;
};

export const Plan: FC<props> = ({
  name,
  price,
  img,
  type,
  active,
  handlePlan,
}) => {
  const togglePlan = (e: any) => {
    e.preventDefault();
    e.stopPropagation(); // because of the event bubbling with the next step btn
    handlePlan("plan", name.toLowerCase());
  };

  return (
    <button
      className={
        "border border-n-light-gray rounded-md p-4 flex gap-4 items-center hover:opacity-70 " +
        (active ? " border-p-purplish-blue" : "")
      }
      onClick={(e) => togglePlan(e)}
    >
      <div>
        <img alt="" src={img} />
      </div>
      <div className="flex flex-col gap-1 items-start">
        <h2 className="font-bold text-p-marine-blue text-lg">{name}</h2>
        <p className="text-base text-n-cool-gray">
          {type === "monthly" ? `$${price}/mo` : `${price}/yr`}
        </p>
      </div>
    </button>
  );
};
