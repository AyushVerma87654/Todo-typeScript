import React, { FC } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

type fun = (data: number) => void;

type DisplayProps = {
  id: number;
  data: string;
  show: boolean;
  onAdd: (data: number) => void;
  handleRemoveClick: (data: number) => void;
  checked?: boolean;
  readOnly?: boolean;
};

const Display: FC<DisplayProps> = ({
  data,
  id,
  onAdd,
  show,
  handleRemoveClick,
  checked,
  readOnly,
}) => {
  let border = "border-4 border-blue-500";
  if (show) {
    border = "border-4 border-black";
  }
  let myFunction = () => {};
  if (show) {
    myFunction = () => handleRemoveClick(id);
  }
  return (
    <div
      className={"flex justify-between my-2 items-center " + border}
      onClick={myFunction}
    >
      <div className="flex items-center">
        <input
          readOnly={readOnly}
          checked={checked}
          onChange={() => {}}
          className="-mb-1"
          type="checkbox"
          onClick={() => onAdd(id)}
        />
        <p>{data}</p>
      </div>
    </div>
  );
};

export default Display;
