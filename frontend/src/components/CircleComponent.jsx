// import React from "react";

// const CircleComponent = ({
//   title = "Enrol anytime, start in days",
//   width = "150px",
//   height = "150px",
//   bgColor = "bg-zinc-900",
//   textColor = "text-white",
//   rotation = "-rotate-[30deg]",
//   textWidth = "100px",
//   textLeft = "left-8",
//   textTop = "top-14",
//   textSize = "text-sm",
// }) => {
//   return (
//     <div
//       className={`w-[${width}] h-[${height}] rounded-full ${bgColor} ${textColor} relative ${rotation}`}
//     >
//       <div
//         className={`${textSize} font-medium flex items-center justify-center absolute w-[${textWidth}] ${textLeft} ${textTop}`}
//       >
//         {title}
//       </div>
//     </div>
//   );
// };

// export default CircleComponent;
import React from "react";
const CircleComponent = ({ title = " Enrol anytime, start in days" }) => {
  return (
    <div className="w-[150px] h-[150px] rounded-full bg-zinc-900 text-white relative -rotate-[30deg]">
      <div className="text-sm font-medium flex items-center justify-center absolute w-[100px]  left-8 top-14">
        {title}
      </div>
    </div>
  );
};

export default CircleComponent;
