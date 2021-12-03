import React from "react";

export const Intro = ({ data }) => {
  return (
    <section className="my-12 w-full">
      <article className="flex flex-col-reverse lg:flex-row items-center justify-around min-h-full w-full py-12">
        <div className="flex-grow w-full flex justify-center items-center">
          <img src="/undraw_startup_life_re_8ow9.svg" className="h-96" />
        </div>
        <div className="flex-grow w-full flex flex-col items-center justify-center">
          <h2 className="text-6xl mb-5 font-bold w-full">{data.title}</h2>
          <p className="leading-8 text-white-text">{data.text}</p>
        </div>
      </article>
    </section>
  );
};
