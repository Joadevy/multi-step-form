import { FC, ReactNode } from "react";

type props = {
  children: ReactNode;
};

export const Container: FC<props> = ({ children }) => {
  return (
    <main className="flex flex-col rounded-xl mx-5 lg:mx-0 my-28 lg:my-14 p-8 lg:p-0 bg-white border-2 border-black">
      {/* <main className="flex flex-col rounded-xl mx-5 lg:mx-0 lg:mr-5 lg:ml-96 my-28 p-8 bg-white"> */}

      {children}
    </main>
  );
};
