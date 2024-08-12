import { writable } from 'svelte/store'

const projects = [
  {
    image: "tedxmakomeno.png",
    title: "TEDx Makomeno",
    desc: `TEDx sont des rassemblements locaux où des conférences de type TED sont partagées avec la communauté. TEDx Makomeno se tient tenu à Lubumbashi RD Congo.`,
    url: "https://tedxmakomeno.pages.dev",
    categorie: "Web Development",
  },
  {
    title: "Paul Z. Minu",
    desc: "Paul Zozo Minu est un conférencier et écrivain, Pasteur à Rehoboth Church International. Diplômé en Genie Mécanique à Eastern Mediterranean University.",
    image: "paulzozo.png",
    url: "https://pzozominu.com",
    categorie: "UI/UX Design & Dev",
  },
  {
    title: "SPAfrica",
    desc: "SPAfrica est une société de sécurité electronique, assurant la sécurité industrielle, commerciale et résidentielle aux entreprises depuis près d'une decenie.",
    image: "spafrica.png",
    url: "https://spafrica.net",
    categorie: "Web Development",
  },
  {
    title: "J.I.K.",
    desc: "Jonathan Isaac Kahambo est un penseur, coach de vie, mentor, entrepreneur, conférencier, auteur, compositeur et écrivain de la nationalité congolaise.",
    image: "jik.png",
    url: "https://jonathanisaack.com",
    categorie: "Web Development",
  },
  {
    title: "TymApp",
    desc: "Plateforme qui offre à la possibilité d'acheter ou de vendre des vêtements. C'est le marché en ligne incontournable pour vendre et acheter des vêtements usés et neufs.",
    image: "tymapp.png",
    url: "https://tymapp.pages.dev",
    categorie: "Web & App Development",
  },
  {
    title: "25Frames",
    desc: "Studio d'animation et effets spéciaux. Crée par deux camerounais en 2017, 25Frames souhaite voir le film d’animation se developer sur l'etendue nationale & continentale.",
    image: "25frames.png",
    url: "https://25frames.pages.dev",
    categorie: "PWA",
  },
  {
    title: "BNTV Africa",
    desc: "Un réseau de diffusion mondial répondant aux défis du changement de la structure sociale de la société noire. BNTV dévoile au monde la véritable ampleur de la culture noire.",
    image: "bntv.png",
    url: "https://bntv-africa.pages.dev",
    categorie: "Web & Mobile App",
  },
]

const config = writable({
  // backendURL: "http://192.168.43.214:5000",
  backendURL: "https://untitled-49shmzjh2c3i.runkit.sh",
  currentUser: null,
  projects
});

export default config;