import "../styles/global.css";
import Layout from "../components/Layout";
import Router from "next/router";

export default function App({ Component, pageProps }) {
  return <Layout>{<Component {...pageProps} />}</Layout>;
}

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeStart", routeChange);
Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);
