import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const LangChanger = () => {
  const [selected, setSelected] = useState("en");

  const router = useRouter();
  useEffect(() => {
    if (router.pathname.includes("sv")) {
      setSelected("sv");
    } else if (router.pathname.includes("fr")) {
      setSelected("fr");
    } else {
      setSelected("en");
    }
  }, [router.pathname]);

  const onChangeHandler = (e, lang) => {
    e.preventDefault();

    for (let i of ["fr", "sv"]) {
      if (i === lang) {
        setSelected(lang);
        router.push(`/${lang}`, undefined, { shallow: true });
        return;
      } else {
        setSelected("en");
        router.push(`/`, undefined, { shallow: true });
      }
    }
  };

  return (
    <div className=" bg-white-text rounded-3xl w-48 h-8">
      <div className="p-1 flex justify-between items-center space-x-1">
        <div
          onClick={(e) => onChangeHandler(e, "en")}
          className={`flex-grow text-center rounded-2xl w-8 cursor-pointer ${
            selected === "en" ? "bg-blue-500 text-white-text" : "text-dark-back"
          }`}
        >
          <span>🇬🇧</span>
          &nbsp;
          <span>EN</span>
        </div>
        <div
          onClick={(e) => onChangeHandler(e, "fr")}
          className={`flex-grow  text-center rounded-2xl w-8 cursor-pointer ${
            selected === "fr" ? "bg-blue-500 text-white-text" : "text-dark-back"
          }`}
        >
          <span>🇫🇷</span>
          &nbsp;
          <span>FR</span>
        </div>
        <div
          onClick={(e) => onChangeHandler(e, "sv")}
          className={`flex-grow  text-center rounded-2xl w-8 cursor-pointer ${
            selected === "sv" ? "bg-blue-500 text-white-text" : "text-dark-back"
          }`}
        >
          <span>🇸🇪</span>
          &nbsp;
          <span>SV</span>
        </div>
      </div>
    </div>
  );
};
