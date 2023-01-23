import { FC, useState } from "react";

type props = {
  title: string;
  desc: string;
  price: number;
  type: string;
  handleAdd: (_: string, __: number) => void;
  handleRemove: (_: string, __: number) => void;
  checked: boolean;
};

export const AddOn: FC<props> = ({
  title,
  desc,
  price,
  type,
  handleAdd,
  handleRemove,
  checked,
}) => {
  const [isChecked, toggleCheck] = useState(checked);

  isChecked
    ? handleAdd(title.toLowerCase(), price)
    : handleRemove(title.toLowerCase(), price);

  return (
    <div
      className={
        "relative w-full border border-n-light-gray rounded-md p-3 flex gap-4 items-center hover:opacity-70 " +
        (checked ? " border-p-purplish-blue" : "")
      }
    >
      <div className="flex gap-4">
        <input
          autoComplete="off"
          checked={checked}
          className="w-6 h-6 self-center cursor-pointer"
          id=""
          name=""
          type="checkbox"
          onChange={(e) => toggleCheck(e.target.checked)}
        />
        <div className="w-8/12 sm:w-full text-left">
          <h3 className="text-base text-p-marine-blue font-bold">{title}</h3>
          <p className="text-n-cool-gray justify-self-start">{desc}</p>
        </div>
      </div>
      <p className="text-p-purplish-blue text-base font-medium absolute right-2">
        {type === "monthly" ? `+$${price}/mo` : `+$${price}/yr`}
      </p>
    </div>
  );
};
