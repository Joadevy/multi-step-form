import { FC } from "react";

type props = {
  message: string;
};

export const ErrorMessage: FC<props> = ({ message }) => {
  return (
    <div className="absolute bottom-2 p-2 border-2 border-red-400">
      Error {message}
    </div>
  );
};
