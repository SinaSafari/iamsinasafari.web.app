import { useRouter } from "next/router";
import React from "react";

export const ContactMe = ({ locale, data }) => {
  // const { locale } = useRouter();
  const content = {
    "en-US": {
      title: "Contact me",
      emailPlaceholder: "Please enter your email address",
      subjectPlaceholder: "Please specify a subject for your message",
      messagePlaceholder: "Write your message here please",
      sendBtn: "Send",
    },
    fr: {
      title: "Contactez moi",
      emailPlaceholder: "Veuillez saisir votre adresse e-mail",
      subjectPlaceholder: "Veuillez spécifier un sujet pour votre message",
      messagePlaceholder: "Écrivez votre message ici s'il vous plaît",
      sendBtn: "envoyer",
    },
  };
  return (
    <section className="w-full max-w-md flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-between">
        <h2 className="w-full text-white-text text-3xl font-bold mb-5">
          {data.title}
        </h2>
        <form className="w-full">
          <div className="w-full mb-3">
            <input
              type="email"
              placeholder={data.emailPlaceholder}
              className="bg-transparent border-b border-white-text w-full py-2 px-3 border-opacity-20 focus:border-b-blue focus:outline-none"
            />
          </div>
          <div className="w-full mb-3">
            <input
              type="text"
              placeholder={data.subjectPlaceholder}
              className="bg-transparent border-b border-white-text w-full py-2 px-3 border-opacity-20 focus:border-b-blue focus:outline-none"
            />
          </div>
          <div className="w-full mb-3">
            <textarea
              type="text"
              placeholder={data.messagePlaceholder}
              rows="2"
              className="bg-transparent border-b border-white-text w-full py-2 px-3 border-opacity-20 focus:border-b-blue focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-row-reverse">
            <input
              type="submit"
              value={data.sendBtn}
              className="bg-secondary text-dark-back px-4 py-2 rounded"
            />
          </div>
        </form>
      </div>
    </section>
  );
};
