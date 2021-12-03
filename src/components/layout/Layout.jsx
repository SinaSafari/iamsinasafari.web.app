import React from "react";
import { LangChanger } from "../ui/LangChanger";

export const Layout = ({ children }) => {
  return (
    <div className="bg-dark-back text-gray-300 w-100 h-auto min-h-screen relative">
      <div className="font-roboto container mx-auto flex flex-col items-center w-full h-full p-3 py-5">
        <header className="w-full flex justify-between items-center">
          <img
            src="/logo.png"
            alt="iamsinasafari"
            className="w-16 h-16 bg-yellow-400 rounded-full border-2 border-yellow-400"
          />
          {/* <LangChanger /> */}
          {/* <p></p> */}
          <LangChanger />
        </header>
        <main className="flex-grow w-full h-auto ">{children}</main>
        <footer className="w-full   pt-4 flex items-center justify-center my-10  absolute bottom-0">
          Made with <span className="animate-pulse">&nbsp;❤️&nbsp;</span> by
          Sina - from 2020 to&nbsp;
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};
