import { FC, useEffect, useState } from "react";

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

  useEffect(() => {
    isChecked
      ? handleAdd(title.toLowerCase(), price)
      : handleRemove(title.toLowerCase(), price);
  }, [isChecked]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={
        "relative w-full border border-n-light-gray rounded-md p-3 lg:px-6 lg:py-3 flex gap-4 items-center hover:opacity-70 " +
        (checked ? " border-p-purplish-blue bg-n-alabaster" : "")
      }
      data-testid={`addon-${title}-container`}
    >
      <div className="flex gap-4">
        <input
          autoComplete="off"
          className="w-6 h-6 self-center cursor-pointer"
          data-testid={`addon-${title}`}
          defaultChecked={checked}
          id=""
          name=""
          type="checkbox"
          onClick={() => toggleCheck(!checked)}
          onKeyPress={(e) => {
            e.preventDefault();
            toggleCheck(!checked);
          }}
        />
        <div className="w-8/12 sm:w-full text-left">
          <h3 className="text-base text-p-marine-blue font-bold">{title}</h3>
          <p className="text-n-cool-gray justify-self-start">{desc}</p>
        </div>
      </div>
      <p className="text-p-purplish-blue text-base font-medium absolute right-2 lg:right-6">
        {type === "monthly" ? `+$${price}/mo` : `+$${price}/yr`}
      </p>
    </div>
  );
};
