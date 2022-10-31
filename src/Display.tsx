import React, { FC } from "react";
import { ImCross } from "react-icons/im";

type fun = (data: string) => void;

type DisplayProps = {
  data: string;
  onAdd: fun;
  handleRemoveClick: fun;
  checked?: boolean;
  readOnly?: boolean;
};

const Display: FC<DisplayProps> = ({
  data,
  onAdd,
  handleRemoveClick,
  checked,
  readOnly,
}) => {
  return (
    <div className="flex justify-between my-2 items-center">
      <div className="flex items-center">
        <input
          readOnly={readOnly}
          checked={checked}
          onChange={() => {}}
          className="-mb-1"
          type="checkbox"
          onClick={() => onAdd(data)}
        />
        <p>{data}</p>
      </div>
      <div>
        {checked && (
          <ImCross
            className="w-2 text-end"
            onClick={() => handleRemoveClick(data)}
          />
        )}
      </div>
    </div>
  );
};

export default Display;
