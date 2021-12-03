import React from "react";

export const TimeLine = ({ data }) => {
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-bold italic ">{data.title}</h2>
      <div className="flex w-full flex-col-reverse lg:flex-row-reverse text-dark-back">
        <div className="flex-grow w-full">
          <div className=" px-6 py-12 text-white-text">
            <h3 className="text-2xl font-bold italic mb-8">
              {/* A little more about me */}
              {data.aLittleMoreAboutMe.title}
            </h3>

            {data.aLittleMoreAboutMe.sections.map((section) => (
              <div className=" mb-10" key={section.title}>
                <h4 className="text-xl font-bold">{section.title}</h4>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative container mx-auto px-6 flex flex-col space-y-8 my-12 flex-grow">
          <p className=" text-2xl italic mb-6 text-white-text font-bold">
            BigBang!
          </p>

          <div className="absolute z-0 w-2 h-full bg-white-text shadow-md inset-0 left-17 "></div>

          {data.experiences.map((item) => (
            <div className="relative z-10" key={item.title}>
              <div className="timeline-img flex justify-center items-center bg-white-text text-dark-back italic text-2xl font-bold">
                {item.beginYear}
              </div>
              <div className="timeline-container">
                <div className="timeline-pointer" aria-hidden="true"></div>
                <div className="bg-white-text p-6 rounded-md shadow-md">
                  <span className="font-bold text-indigo-600 text-sm tracking-wide">
                    {item.from} - {item.to}
                    {/* Jan 2021 */}
                  </span>
                  <h1 className="text-2xl font-bold pt-1">{item.title}</h1>
                  <p className="font-thin">{item.companyName}</p>
                  <p className="pt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
