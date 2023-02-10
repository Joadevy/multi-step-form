import { FC } from "react";

type props = {
  title: string;
  desc: string;
};

export const Header: FC<props> = ({ title, desc }) => {
  return (
    <header className="flex flex-col gap-2">
      <h2 className="font-bold text-4xl lg:text-3xl text-p-marine-blue">
        {title}
      </h2>
      <p className="text-n-cool-gray text-xl lg:text-base font-medium">
        {desc}
      </p>
    </header>
  );
};
