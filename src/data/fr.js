export const FrHeroContent = {
  superText: "Je suis",
  name: "Sina Safari",
  subTitle: "ingénieur logiciel",
  phonetic: "/si:nɑ: sæfæri:/",
};

export const FrIntroContent = {
  title: "À propos de moi",
  text: `Je suis un étudiant ingénieur en informatique, dans le domaine du génie logiciel, et un développeur web. Mais je me décris comme un apprenant enthousiaste qui aime sa curiosité. Connaître d'autres technologies, même une pincée, m'est toujours agréable.
      La majeure partie de mon parcours d'apprentissage s'est déroulée dans le monde Javascript, en particulier React et Node. Mais j'avais de l'expérience dans d'autres domaines comme le développement d'applications mobiles et les bases de données. J'essaie de connaître l'ensemble du système de mieux en mieux chaque jour. `,
};

export const FrSocialContent = {
  title: "Contactez moi",
  sub: "Vous pouvez me trouver sur ces réseaux sociaux:",
  secondSub: "Ou vous pouvez me contacter par:",
  resume: "Vous pouvez également obtenir une copie de mon curriculum vitae.",
  resumeBtn: "Résumé",
};

export const FrTimelineContent = {
  title: "Mes expériences professionnelles",
  experiences: [
    {
      id: 1,
      beginYear: "2015",
      from: "mai 2015",
      to: "févr. 2018",
      title: "Assistant de recherche - Traducteur",
      companyName: "Roshd Andishe Behafarin",
      description: `Performed various translation and interpretation duties from Persian into English and English into Persian, including academic texts and ISI articles.`,
    },
    {
      id: 2,
      beginYear: "2017",
      from: "févr. 2017",
      to: "févr. 2018",
      title: "Assistant de visualisation de données",
      companyName: "Roshd Andishe Behafarin",
      description: `Collaborated with the data analysis team with a focus on data visualization and representation.`,
    },
    {
      id: 3,
      beginYear: "2017",
      from: "févr. 2017",
      to: "déc. 2021",
      title: "B.Sc. en génie informatique",
      companyName: "IAU TNB",
      description: `I study computer engineering majoring in software, However, I also did some research on field of artificial intelligence.`,
    },
    {
      id: 4,
      beginYear: "2019",
      from: "nov. 2019",
      to: "déc. 2019",
      title: "Web development internship",
      companyName: "Pouyesh System Saba",
      description: `3 weeks internship program in field of web development specifically SSR in react and nextjs.`,
    },
    {
      id: 5,
      beginYear: "2019",
      from: "déc. 2019",
      to: "sept. 2020",
      title: "Web developer",
      companyName: "Pouyesh System Saba",
      description: `My responsibilities were developing web applications with technologies like nextjs, django and nodejs, also collaborating with the development team in other sections.`,
    },
    {
      id: 6,
      beginYear: "2020",
      from: "nov. 2020",
      to: "mars 2021",
      title: "Frontend developer",
      companyName: "Hamimohajer",
      description: `Nextjs developer and part of frontend developers' team.
working on Hamimohajer website, admin panel, and Karino.`,
    },
    {
      id: 7,
      beginYear: "2021",
      from: "mars 2021",
      to: "sept. 2021",
      title: "Fullstack web developer",
      companyName: "Hamimohajer",
      description: `My responsibilities was to collaborate in the development team of Hami Mohajer, in both frontend and backend fields.
The main project I was involved with, was the Hamimohajer intra-organizational CRM.`,
    },
    {
      id: 8,
      beginYear: "2021",
      from: "sept. 2021",
      to: "Présent",
      title: "Ingénieur logiciel",
      companyName: "TOP",
      description: `Web developer in top.ir and top wallet websites project development team.`,
    },
  ],
  aLittleMoreAboutMe: {
    title: "Un peu plus sur moi",
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
                et c&apos;est une photo de moi. la plupart du temps, je ne suis
                pas vu comme ça dans les bois. Je suis généralement à mon bureau
                en train d&apos;écrire du code ou d&apos;apprendre quelque
                chose. mais je veux sortir, les bois seront définitivement mon
                choix.
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
                <img className="h-60 rounded-xl object-cover" src="/book.jpg" />
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
              Après avoir suivi des cours universitaires sur l&apos;intelligence
              artificielle, je commence à découvrir le monde incroyable de
              l&apos;IA. J&apos;ai suivi quelques cours et j&apos;en prends
              encore.
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
};

export const FrUsesthisContent = {
  title: "Il utilise ces",
  description:
    "J'utilise habituellement ces logiciels et matériels dans ma vie technologique quotidienne",
  softwareTitle: "les Logiciels",
  hadrwareTitle: "les Matériels",
  galleryDesc: "J'aime aussi prendre des photos de mon bureau!",
};
