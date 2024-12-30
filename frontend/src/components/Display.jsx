import React from "react";
import Button from "./Button";

function Display({ val }) {
  return (
    <>
      <div className={`wrapper ${val.bgcolor} p-8 sm:p-6 rounded-3xl mt-10`}>
        <div
          style={{
            backgroundImage: `url(${val.bgimg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:"220px",
          }}
        >
          <div className="w-full">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Images */}
              <div className="leftdiv mt-16 w-full lg:w-1/2 items-end flex flex-col pt-8 lg:pt-[6em]">
                <div className="card1 w-full lg:w-[400px] h-[200px] lg:h-[300px] mb-6">
                  <img
                    className="rounded-3xl object-cover w-full h-full"
                    src={`${val.img1url}`}
                  />
                </div>
                <div className="card2 w-full lg:w-[40vw] object-cover">
                  <img
                    className="rounded-3xl object-cover w-full h-full"
                    src={`${val.img2url}`}
                  />
                </div>
              </div>

              {/* Right Side - Video and Text */}
              <div className="rightdiv pt-6 lg:pt-[2em] lg:pl-6 rounded-3xl w-full lg:w-1/2">
                <div className="videodiv mb-6 rounded-3xl">
                  <video
                    className="w-full h-full rounded-3xl"
                    src={`${val.videourl}`}
                    autoPlay
                    muted
                    loop
                  ></video>
                </div>
                <div className="testimonial">
                  <div className="testimonial-content lg:ml-8">
                    <p className="mt-6 lg:mt-10 mb-5">{val.paratxt}</p>
                    <h3 className="mb-5 font-medium text-lg"> {val.h3text} </h3>
                    <Button title="Visit website" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
