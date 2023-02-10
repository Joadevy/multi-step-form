import { FC } from "react";
import "./Switcher.css";

type props = {
  handlerStatus: () => void;
};

const Switcher: FC<props> = ({ handlerStatus }) => {
  return (
    <label className="switch">
      <input data-testid={"switcher"} type="checkbox" onClick={handlerStatus} />
      <span className="slider round" />
    </label>
  );
};

export default Switcher;
