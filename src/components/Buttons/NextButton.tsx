import { FC } from "react";

type props = {
  bgColor: string;
  label: string;
};

export const NextButton: FC<props> = ({ bgColor, label }) => {
  return (
    <input
      className={
        "absolute z-20 bottom-4 lg:bottom-0 right-6 lg:right-1/2 rounded-md px-4 py-3 text-white font-bold cursor-pointer hover:opacity-70 transition-colors " +
        bgColor
      }
      type="submit"
      value={label}
    />
  );
};
