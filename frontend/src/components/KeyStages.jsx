import React from "react";
import Button from "./Button";

const KeyStages = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bg: "bg-orange-500",
      title: "Early Years",
      stage: "Key Stage 2",
      year: "Years 3-6 | Ages 7-11",
    },

    {
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Early Years",
      bg: "bg-blue-500",
      stage: "Key Stage 3",
      year: "Years 3-6 | Ages 7-11",
    },

    {
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Early Years",
      bg: "bg-yellow-500",
      stage: "Key Stage 4",
      year: "Years 3-6 | Ages 7-11",
    },

    {
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Early Years",
      bg: "bg-green-500",
      stage: "Key Stage 5",
      year: "Years 3-6 | Ages 7-11",
    },
  ];
  return (
    <div className="relative px-8 max-w-screen-xl mx-auto p-8">
      <div className="w-full h-full flex items-center justify-center flex-col ">
        <span className="px-4 py-2 rounded-full bg-sky-200 text-zinc-950 font-semibold text-center">
          KeyStages
        </span>
        <div className="py-6">
          <h2 className="text-xl lg:text-4xl font-semibold text-center ">
            Nurturing your child's potential at every stage of their education
          </h2>
          <h3 className="text-sm lg:text-xl font-semibold text-center mt-6">
            For ages 7-19, King's InterHigh empowers students to thrive with
            personalized, supportive, world-class learning — fully online.
          </h3>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-wrap items-center justify-center gap-8 lg:flex-nowrap">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-[80vw] h-full p-6 ${item.bg} rounded-2xl lg:w-[20vw] flex items-center justify-center flex-col gap-4`}
          >
            <div className="image w-40 h-40 bg-zinc-800 rounded-full">
              <img
                src={item.image}
                className="w-full h-full rounded-full object-fill"
              />
            </div>
            <div className="txt">
              <h2 className="text-2xl font-bold">{item.title}</h2>
            </div>
            <div className="txt">
              <h2 className="text-xl font-bold">{item.stage}</h2>
            </div>
            <div className="txt">
              <h2 className="text-xl font-semibold">{item.year}</h2>
            </div>
            <Button title="Enrol Now" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStages;
