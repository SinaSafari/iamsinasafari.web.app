import React from "react";

export const UsesThis = ({ data }) => {
  return (
    <div className="w-full my-12">
      <div className="w-full mb-4">
        <h2 className="font-bold text-4xl italic mb-4">{data.title}</h2>
        <p>{data.description}</p>
      </div>
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-grow w-full mb-5">
          <h3 className="text-xl font-bold">{data.hadrwareTitle}</h3>
          <div className="mb-4">
            <h4 className="text-lg mb-3">PC</h4>
            <div className="ml-8 space-y-2">
              <p>
                <span className="font-bold">MotherBoard</span>
                &nbsp;
                <span>ASUS H310M-R</span>
                &nbsp;
                <span className="font-thin">1 years old</span>
              </p>
              <p>
                <span className="font-bold">CPU</span>
                &nbsp;
                <span>Intel i3-9100F</span>
                &nbsp;
                <span className="font-thin">1 years old</span>
              </p>
              <p>
                <span className="font-bold">RAM</span>
                &nbsp;
                <span>Geil Pristine DDR4 2400MHz 24GB</span>
                &nbsp;
                <span className="font-thin">1 years old</span>
              </p>
              <p>
                <span className="font-bold">GPU</span>
                &nbsp;
                <span>NVIDIA GeForce GT 710</span>
                &nbsp;
                <span className="font-thin">1 years old</span>
              </p>
              <p>
                <span className="font-bold">Keyboard</span>
                &nbsp;
                <span>T-DAGGER Bora T-TGK313</span>
                &nbsp;
                <span className="font-thin">1 years old</span>
              </p>
              <p>
                <span className="font-bold">Monitor</span>
                &nbsp;
                <span>GPlus GDM-245JN</span>
                &nbsp;
                <span className="font-thin">2 years old</span>
              </p>
            </div>
          </div>

          <div className="">
            <h4 className="text-lg">MacBook Pro 2017</h4>
            <div className="ml-8 space-y-2">
              <p>
                <span className="font-bold">CPU</span>
                &nbsp;
                <span>Intel Core i5 7360U</span>
                &nbsp;
                <span className="font-thin">4 years old</span>
              </p>
              <p>
                <span className="font-bold">RAM</span>
                &nbsp;
                <span>8 GB of 2133 MHz</span>
                &nbsp;
                <span className="font-thin">4 years old</span>
              </p>
              <p>
                <span className="font-bold">GPU</span>
                &nbsp;
                <span>Intel Iris Plus Graphics 640</span>
                &nbsp;
                <span className="font-thin">4 years old</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-grow w-full mb-5 ">
          <h3 className="text-xl font-bold mb-3">{data.softwareTitle}</h3>
          <div className=" space-y-2">
            <p>
              <span className="font-bold">Operating system</span>
              &nbsp;
              <span>Zorin OS</span>
            </p>
            <p>
              <span className="font-bold">Terminal Shell</span>
              &nbsp;
              <span>zsh 5.4.2 - robbyrussell</span>
            </p>
            <p>
              <span className="font-bold">IDE</span>
              &nbsp;
              <span>Visual Studio Code</span>
            </p>
            <p>
              <span className="font-bold">Browser</span>
              &nbsp;
              <span>Chrome (80%) - FireFox</span>
            </p>
            <p>
              <span className="font-bold">Player</span>
              &nbsp;
              <span>VLC</span>
            </p>
            <p>
              <span className="font-bold">Office Tools</span>
              &nbsp;
              <span>OnlyOffice</span>
            </p>
          </div>
        </div>

        <div className="flex-grow w-full mb-5 ">
          <div className=" flex space-x-1 p-1 bg-white-text bg-opacity-20 rounded-xl">
            <div className=" flex-grow w-1/2 flex flex-col space-y-1">
              <div className="flex-grow h-1/2">
                <img
                  src="/desktop3.jpg"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div className="flex-grow h-1/2">
                <img
                  src="/desktop.jpg"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="flex-grow w-1/2">
              <img
                src="/desktop2.jpg"
                className="w-full h-full rounded-xl object-cover "
              />
            </div>
          </div>
          <p className="text-right font-thin mb-2">{data.galleryDesc}</p>
        </div>
      </div>
    </div>
  );
};
