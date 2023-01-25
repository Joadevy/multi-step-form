import { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};

export const Container: FC<props> = ({ children }) => {
  return (
    <main className="flex flex-col rounded-xl mx-5 my-28 p-8 bg-white">
      {children}
    </main>
  );
};
