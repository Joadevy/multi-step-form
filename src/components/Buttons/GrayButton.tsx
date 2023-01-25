import { FC } from "react";

type props = {
  action: () => void;
  label: string;
};

export const GrayButton: FC<props> = ({ action, label }) => {
  return (
    <button
      className="absolute z-20 bottom-6 left-6 text-n-cool-gray text-lg hover:text-p-marine-blue transition-colors"
      onClick={action}
    >
      {label}
    </button>
  );
};
