import React from "react";
import CircleComponent from "./CircleComponent";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="px-8 py-8 max-w-screen-xl mx-auto">
      <div className="w-full h-auto rounded-2xl bg-yellow-500 p-4 relative lg:h-[75vh]">
        <CircleComponent />
        <div className="w-full flex items-center justify-center flex-col gap-6">
          <div className="w-full text-center mt-8 text-2xl text-white lg:text-5xl lg:mt-8 flex justify-center items-center font-bold">
            The UK's Leading Global Online School
          </div>
          <span className="text-center text-white text-xl font-semibold -mt-4 ">
            Reach your true potential at King's InterHigh.
          </span>
          <Button title="JOIN NOW" padding="py-4 px-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// px-8 max-w-screen-xl mx-auto
