import React from "react";

export const Hero = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full my-12">
      <div className="flex-grow flex justify-center  items-center flex-col mb-12">
        <div>
          <p className="w-full text-left text-3xl font-light">
            {data.superText}
          </p>
          <h1 className="w-full text-6xl lg:text-9xl font-bold">
            {data.name}{" "}
          </h1>
          <p className="text-right text-sm  italic">{data.phonetic}</p>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <img
          src="/me.JPG"
          alt="me"
          className="w-72 h-72 rounded-full object-cover border-2 border-yellow-400"
        />
      </div>
    </div>
  );
};
