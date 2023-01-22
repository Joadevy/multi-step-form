import { FC, useState } from "react";

type props = {
  title: string;
  desc: string;
  price: number;
  type: string;
  handleAdd: (_: string, __: number) => void;
  handleRemove: (_: string, __: number) => void;
  checked: boolean;
};

export const AddOn: FC<props> = ({
  title,
  desc,
  price,
  type,
  handleAdd,
  handleRemove,
  checked,
}) => {
  const [isChecked, toggleCheck] = useState(checked);

  isChecked
    ? handleAdd(title.toLowerCase(), price)
    : handleRemove(title.toLowerCase(), price);

  return (
    <li>
      <div>
        <input
          checked={checked}
          id=""
          name=""
          type="checkbox"
          onChange={(e) => toggleCheck(e.target.checked)}
        />
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <p>{type === "monthly" ? `+$${price}/mo` : `+$${price}/yr`}</p>
    </li>
  );
};
