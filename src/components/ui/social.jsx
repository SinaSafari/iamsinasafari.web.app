import { useRouter } from "next/router";
import React from "react";

export const SocialAndContactMe = ({ data }) => {
  const links = {
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com/in/sina-safari-2429a3168/",
    github: "https://github.com/sinasafari",
  };

  const { push } = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-12">
      <div className="flex-grow w-full flex justify-center items-center">
        <img src="/undraw_working_from_anywhere_re_9obt.svg" />
      </div>
      <div className="flex-grow flex w-full flex-col justify-center  items-center px-12">
        <div className="space-y-2">
          <h2 className=" text-4xl w-full font-bold">{data.title}</h2>
          <p className=" w-full text-lg">{data.sub}</p>
          <div className="flex items-center w-full space-x-8">
            <img
              src="/linkedin.png"
              className="w-12 cursor-pointer"
              alt="my linkedin profile"
              onClick={() => window.open(links.linkedin)}
            />
            <img
              src="/twitter.png"
              className="w-12 cursor-pointer"
              alt="my twitter profile"
              onClick={() => window.open(links.twitter)}
            />
            <img
              src="/github.png"
              className="w-12 cursor-pointer"
              alt="my github profile"
              onClick={() => window.open(links.github)}
            />
          </div>
          <div>
            <p className="mt-4 text-lg">{data.secondSub}</p>
            <p className="my-2">
              {" "}
              <span>&#9993;</span> m.sinasafari@gmail.com
            </p>
            <p className="my-2">
              <span>&#9742;</span> +989380260839
            </p>
          </div>
          <div>
            <p>{data.resume}</p>
            <div
              className="bg-secondary px-4 py-2 w-40 text-center text-dark-back rounded-xl my-3 cursor-pointer"
              onClick={() => push("/sinasafari.pdf")}
            >
              {data.resumeBtn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
