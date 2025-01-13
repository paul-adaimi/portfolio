import "../styles/global.css";
import Layout from "../components/Layout";

// All imports here are a temporary fix for the animation out in production
import "../components/HomePage/AnimatedTextScroll.module.css";
import "../components/HomePage/Intro.module.css";
import "../components/HomePage/PaulCoded.module.css";
import "../components/HomePage/Index.module.css";

import "../components/ProjectsPage/Index.module.css";
import "../components/ProjectsPage/VSCode.module.css";
import "../components/ProjectsPage/ProjectsList.module.css";
import "../components/ProjectsPage/Cards/CardList.module.css";

import "../components/AboutPage/Accordion.module.css";
import "../components/AboutPage/AccordionItem.module.css";
import "../components/AboutPage/Index.module.css";
import "../components/AboutPage/SubSection.module.css";

import "../components/Global/AnimatedTextCoordinated.module.css";
import "../components/Global/AnimatedTextIndependant.module.css";
import "../components/Global/AnimatedTitle.module.css";
import "../components/Global/Laptop.module.css";
import "../components/Global/Phone.module.css";

export default function App({ Component, pageProps }) {
  return <Layout>{<Component {...pageProps} />}</Layout>;
}
