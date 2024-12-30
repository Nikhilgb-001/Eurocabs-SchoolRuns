import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({
  title = " Start a Project",
  padding = "px-4 py-2",
  font = "font-semibold",
  bg = "bg-zinc-100",
  txt = "text-black",
}) => {
  return (
    <div
      className={`w-fit ${padding} bg-zinc-900 rounded-full text-white flex items-center justify-center gap-4 dark:${bg} dark:${txt} font-${font}`}
    >
      <span className="text-sm font-medium">{title}</span>
      <BsArrowReturnRight />
    </div>
  );
};

export default Button;
