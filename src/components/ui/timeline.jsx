import React from "react";

export const TimeLine = ({ data, locale }) => {
  const content = {
    en: {
      sections: [
        {
          id: 1,
          title: "More personal",
          text: (
            <>
              <p>
                I remember my uncles were teaching me how to use computer when I
                was four or five years old. but I did not write any line of code
                until 17. I tried many jobs but I always knew that somehow I
                will end up with computers. now I can&apos;t imagine myself
                without programming, or developing something even a single day!
                <br />
              </p>
              <div className="flex flex-col lg:flex-row my-4">
                <p className="my-6 pr-4">
                  and this is a photo of me. most of the time, I&apos;m not seen
                  like this in the woods. I&apos;m usually at my desk writing
                  code or learning something. but I want to go out, definitely
                  woods will be my choice.
                </p>
                <div className="flex justify-center items-center w-full my-5 h-96">
                  <img
                    className="h-96 rounded-xl object-cover"
                    src="/me2.jpg"
                  />
                </div>
              </div>

              <p></p>
            </>
          ),
        },
        {
          id: 2,
          title: "Hobbies and routines",
          text: (
            <>
              <p>
                books and movies are my main hobbies. I also listen to some
                podcasts in my free time.
              </p>
              <div className="flex flex-col lg:flex-row justify-between my-5">
                <p>
                  usually I read books which are about computer science and
                  engineering but It&apos;s so enjoyable for me.
                </p>
                <div className="flex justify-center items-center w-full ">
                  <img
                    className="h-60 rounded-xl object-cover"
                    src="/book.jpg"
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          id: 3,
          title: "Courses and certificates",
          text: (
            <>
              <p>
                After taking some university courses about artificial
                intelligence, I start to learn amazing world of AI. I took a
                couple of courses and still taking some.
              </p>
              <div
                className="w-full flex items-center space-x-5 my-5 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://coursera.org/share/fbe0115adb5867be5271ffd07c4a955e"
                  )
                }
              >
                <div className="w-1/4 md:w-auto">
                  <img src="/coursera.png" className="md:w-14 w-full rounded" />
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-sm md:text-lg">
                    Neural Networks and Deep Learning
                  </p>
                  <p>deeplearning.ai - coursera.org</p>
                </div>
              </div>
              <div
                className="w-full flex items-center space-x-5 my-5 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/15xeY15Ddujn9_ol2q9L91hNSKMRzuAOZ/view"
                  )
                }
              >
                <div className="w-1/4 md:w-auto">
                  <img
                    src="/part.jpeg"
                    className="w-full md:w-14 rounded m-0"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-sm md:text-lg">
                    Artificial Intelligence School
                  </p>
                  <p>partcollege.ai</p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 4,
          title: "Perspective and future",
          text: `With the power of AI, future will be full of surprises. integrating AI world and web (which is my carrer) or mobile apps, is so amazing.`,
        },
        // {
        //   id: 5,
        //   title: "A memory",
        //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        // saepe dicta minus quos fugiat id debitis sit temporibus. In,
        // sunt fuga?`,
        // },
      ],
    },
    fr: {
      sections: [
        {
          id: 1,
          title: "Plus personnel",
          text: (
            <>
              <p>
                Je me souviens que mes oncles m&apos;apprenaient à utiliser
                l&apos;ordinateur quand j&apos;avais quatre ou cinq ans. mais je
                n&apos;ai écrit aucune ligne de code avant 17 ans. J&apos;ai
                essayé de nombreux travaux mais j&apos;ai toujours su que
                d&apos;une manière ou d&apos;une autre je finirais avec des
                ordinateurs. maintenant je ne peux pas m&apos;imaginer sans
                programmer, ou développer quelque chose même un seul jour !
                <br />
              </p>
              <div className="flex flex-col md:flex-row my-4">
                <p className="my-6 pr-4">
                  et c&apos;est une photo de moi. la plupart du temps, je ne
                  suis pas vu comme ça dans les bois. Je suis généralement à mon
                  bureau en train d&apos;écrire du code ou d&apos;apprendre
                  quelque chose. mais je veux sortir, les bois seront
                  définitivement mon choix.
                </p>
                <div className="flex justify-center items-center w-full my-5 h-96">
                  <img
                    className="h-96 rounded-xl object-cover"
                    src="/me2.jpg"
                  />
                </div>
              </div>

              <p></p>
            </>
          ),
        },
        {
          id: 2,
          title: "Les Loisirs et routines",
          text: (
            <>
              <p>
                les livres et les films sont mes passe-temps principaux.
                J&apos;écoute aussi quelques podcasts pendant mon temps libre.
              </p>
              <div className="flex justify-between my-5">
                <p>
                  d&apos;habitude, je lis des livres qui traitent de
                  l&apos;informatique et de l&apos;ingénierie, mais c&apos;est
                  tellement agréable pour moi.
                </p>
                <div className="flex justify-center items-center w-full ">
                  <img
                    className="h-60 rounded-xl object-cover"
                    src="/book.jpg"
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          id: 3,
          title: "Les Cours et les certificats",
          text: (
            <>
              <p>
                Après avoir suivi des cours universitaires sur
                l&apos;intelligence artificielle, je commence à découvrir le
                monde incroyable de l&apos;IA. J&apos;ai suivi quelques cours et
                j&apos;en prends encore.
              </p>
              <div
                className="w-full flex items-center space-x-5 my-5 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://coursera.org/share/fbe0115adb5867be5271ffd07c4a955e"
                  )
                }
              >
                <div>
                  <img src="/coursera.png" className="w-14 rounded" />
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-lg">Neural Networks and Deep Learning</p>
                  <p>deeplearning.ai - coursera.org</p>
                </div>
              </div>
              <div
                className="w-full flex items-center space-x-5 my-5  cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/15xeY15Ddujn9_ol2q9L91hNSKMRzuAOZ/view"
                  )
                }
              >
                <div>
                  <img src="/part.jpeg" className="w-14 rounded" />
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-lg">Artificial Intelligence School</p>
                  <p>partcollege.ai</p>
                </div>
              </div>
              <p className="my-3"></p>
            </>
          ),
        },
        {
          id: 4,
          title: "La Perspective et l'avenir",
          text: `Avec la puissance de l'IA, l'avenir sera plein de surprises. intégrer le monde de l'IA et le web (c'est ma carrière) ou des applications mobiles, c'est tellement incroyable.`,
        },
        // {
        //   id: 5,
        //   title: "Un souvenir",
        //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        // saepe dicta minus quos fugiat id debitis sit temporibus. In,
        // sunt fuga?`,
        // },
      ],
    },
    sv: {
      sections: [
        {
          id: 1,
          title: "More personal",
          text: (
            <>
              <p>
                I remember my uncles were teaching me how to use computer when I
                was four or five years old. but I did not write any line of code
                until 17. I tried many jobs but I always knew that somehow I
                will end up with computers. now I can&apos;t imagine myself
                without programming, or developing something even a single day!
                <br />
              </p>
              <div className="flex flex-col lg:flex-row my-4">
                <p className="my-6 pr-4">
                  and this is a photo of me. most of the time, I&apos;m not seen
                  like this in the woods. I&apos;m usually at my desk writing
                  code or learning something. but I want to go out, definitely
                  woods will be my choice.
                </p>
                <div className="flex justify-center items-center w-full my-5 h-96">
                  <img
                    className="h-96 rounded-xl object-cover"
                    src="/me2.jpg"
                  />
                </div>
              </div>

              <p></p>
            </>
          ),
        },
        {
          id: 2,
          title: "Hobbies and routines",
          text: (
            <>
              <p>
                books and movies are my main hobbies. I also listen to some
                podcasts in my free time.
              </p>
              <div className="flex flex-col lg:flex-row justify-between my-5">
                <p>
                  usually I read books which are about computer science and
                  engineering but It&apos;s so enjoyable for me.
                </p>
                <div className="flex justify-center items-center w-full ">
                  <img
                    className="h-60 rounded-xl object-cover"
                    src="/book.jpg"
                  />
                </div>
              </div>
            </>
          ),
        },
        {
          id: 3,
          title: "Courses and certificates",
          text: (
            <>
              <p>
                After taking some university courses about artificial
                intelligence, I start to learn amazing world of AI. I took a
                couple of courses and still taking some.
              </p>
              <div
                className="w-full flex items-center space-x-5 my-5 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://coursera.org/share/fbe0115adb5867be5271ffd07c4a955e"
                  )
                }
              >
                <div>
                  <img src="/coursera.png" className="w-14 rounded" />
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-lg">Neural Networks and Deep Learning</p>
                  <p>deeplearning.ai - coursera.org</p>
                </div>
              </div>
              <div
                className="w-full flex items-center space-x-5 my-5  cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/15xeY15Ddujn9_ol2q9L91hNSKMRzuAOZ/view"
                  )
                }
              >
                <div>
                  <img src="/part.jpeg" className="w-14 rounded" />
                </div>
                <div className="flex-grow flex flex-col">
                  <p className="text-lg">Artificial Intelligence School</p>
                  <p>partcollege.ai</p>
                </div>
              </div>
              <p className="my-3"></p>
            </>
          ),
        },
        {
          id: 4,
          title: "Perspective and future",
          text: `With the power of AI, future will be full of surprises. integrating AI world and web (which is my carrer) or mobile apps, is so amazing.`,
        },
        // {
        //   id: 5,
        //   title: "A memory",
        //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        // saepe dicta minus quos fugiat id debitis sit temporibus. In,
        // sunt fuga?`,
        // },
      ],
    },
  };
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

            {content[locale].sections.map((section) => (
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
