import { FC } from "react";
import "./Switcher.css";

type props = {
  handlerStatus: () => void;
  checked: boolean;
};

const Switcher: FC<props> = ({ handlerStatus, checked }) => {
  return (
    <label className="switch">
      <input
        data-testid={"switcher"}
        defaultChecked={checked}
        type="checkbox"
        onClick={handlerStatus}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switcher;
