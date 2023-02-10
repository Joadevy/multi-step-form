import { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};

export const Container: FC<props> = ({ children }) => {
  return (
    <main className="h-[84vh] lg:h-28 flex flex-col rounded-xl mx-5 lg:mx-0 mt-[15vh] lg:my-14 p-8 lg:p-0  ">
      {children}
    </main>
  );
};
