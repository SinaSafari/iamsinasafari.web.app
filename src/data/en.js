/**
 * components:
 *
 * hero
 * intro
 * timeline / moreaboutme
 * social
 * usesthis
 */

export const EnHeroContent = {
  superText: "I am",
  name: "Sina Safari",
  subTitle: "Software Engineer",
  phonetic: "/si:nɑ: sæfæri:/",
};

export const EnIntroContent = {
  title: "About me",
  text: `I'm a computer engineer student, in field of software engineering, and a web developer. But I describe myself as an enthusiastic learner who loves his curiosity. Knowing other technologies, even a pinch, is always pleasant to me.
      Most of my learning path was in Javascript world, specifically react and node. But l had experience in other fields like mobile app development and databases. I try to know then whole system better and better everyday.`,
};

export const EnSocialContent = {
  title: "Contact Me",
  sub: "you can find me in these social medias:",
  secondSub: "Or you can contact me by:",
  resume: "Also, you can get a copy of my resume.",
  resumeBtn: "Resume",
};

export const EnTimelineContent = {
  title: "My professional Experiences",
  experiences: [
    {
      id: 1,
      beginYear: "2015",
      from: "May 2015",
      to: "Feb 2018",
      title: "Research Assistant - Translator",
      companyName: "Roshd Andishe Behafarin",
      description: `Performed various translation and interpretation duties from Persian into English and English into Persian, including academic texts and ISI articles.`,
    },
    {
      id: 2,
      beginYear: "2017",
      from: "Feb 2017",
      to: "Feb 2018",
      title: "Data Visualization Assistant",
      companyName: "Roshd Andishe Behafarin",
      description: `Collaborated with the data analysis team with a focus on data visualization and representation.`,
    },
    {
      id: 3,
      beginYear: "2017",
      from: "Feb 2017",
      to: "Dec 2021",
      title: "Computer Engineering B.Sc.",
      companyName: "IAU TNB",
      description: `I study computer engineering majoring in software, However, I also did some research on field of artificial intelligence.`,
    },
    {
      id: 4,
      beginYear: "2019",
      from: "Nov 2019",
      to: "Dec 2019",
      title: "Web development internship",
      companyName: "Pouyesh System Saba",
      description: `3 weeks internship program in field of web development specifically SSR in react and nextjs.`,
    },
    {
      id: 5,
      beginYear: "2019",
      from: "Dec 2019",
      to: "Sep 2020",
      title: "Web developer",
      companyName: "Pouyesh System Saba",
      description: `My responsibilities were developing web applications with technologies like nextjs, django and nodejs, also collaborating with the development team in other sections.`,
    },
    {
      id: 6,
      beginYear: "2020",
      from: "Nov 2020",
      to: "Mar 2021",
      title: "Frontend developer",
      companyName: "Hamimohajer",
      description: `Nextjs developer and part of frontend developers' team.
working on Hamimohajer website, admin panel, and Karino.`,
    },
    {
      id: 7,
      beginYear: "2021",
      from: "Mar 2021",
      to: "Sep 2021",
      title: "Fullstack web developer",
      companyName: "Hamimohajer",
      description: `My responsibilities was to collaborate in the development team of Hami Mohajer, in both frontend and backend fields.
The main project I was involved with, was the Hamimohajer intra-organizational CRM.`,
    },
    {
      id: 8,
      beginYear: "2021",
      from: "Sep 2021",
      to: "Present",
      title: "Software engineer",
      companyName: "TOP",
      description: `Web developer in top.ir and top wallet websites project development team.`,
    },
  ],
  aLittleMoreAboutMe: {
    title: "A little more about me",
    sections: [
      {
        id: 1,
        title: "More personal",
        text: (
          <>
            <p>
              I remember my uncles were teaching me how to use computer when I
              was four or five years old. but I did not write any line of code
              until 17. I tried many jobs but I always knew that somehow I will
              end up with computers. now I can&apos;t imagine myself without
              programming, or developing something even a single day!
              <br />
            </p>
            <div className="flex flex-col lg:flex-row my-4">
              <p className="my-6 pr-4">
                and this is a photo of me. most of the time, I&apos;m not seen
                like this in the woods. I&apos;m usually at my desk writing code
                or learning something. but I want to go out, definitely woods
                will be my choice.
              </p>
              <div className="flex justify-center items-center w-full my-5 h-96">
                <img className="h-96 rounded-xl object-cover" src="/me2.jpg" />
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
                <img className="h-60 rounded-xl object-cover" src="/book.jpg" />
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

export const EnUsesthisContent = {
  title: "UsesThis",
  description:
    "I usually use these softwares and hardwares in my daily tech life",
  softwareTitle: "Softwares",
  hadrwareTitle: "Hardwares",
  galleryDesc: "Also I love to take photo of my desktop!",
};
