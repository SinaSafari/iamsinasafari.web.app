import { useRouter } from "next/router";
import React from "react";

const FourOFour = () => {
  const { push } = useRouter();
  return (
    <div className="w-full h-full container mx-auto flex items-center justify-center mt-16 md:mt-32">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-9xl text-secondary font-bold">404</h1>
        <p>You are somewhere you supposed not!</p>
        <button
          className="bg-secondary w-36 h-16 p-3 text-center rounded-xl text-dark-back"
          onClick={() => push("/")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
};

export default FourOFour;
