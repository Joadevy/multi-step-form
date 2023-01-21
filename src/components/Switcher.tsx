import React, { FC } from "react";
import "./Switcher.css";

type props = {
  handlerStatus: () => void;
};

const Switcher: FC<props> = ({ handlerStatus }) => {
  return (
    <label className="switch">
      <input type="checkbox" onChange={handlerStatus} />
      <span className="slider round" />
    </label>
  );
};

export default Switcher;
