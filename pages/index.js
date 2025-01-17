import Index from "../components/HomePage/Index";
import { useAnimatedTitle } from "../components/Global/AnimatedTitleProvider";
import { AnimatedTextCoordinatorProvider } from "../components/Global/AnimatedTextCoordinatorProvider";
import Head from "next/head";

export default function Home() {
  const { isAnimating } = useAnimatedTitle();
  return (
    <>
      <Head>
        <title>Paul Adaimi</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Paul Adaimi",
              url: "https://pauladaimi.com",
              description: "Paul Adaimi's Portfolio, Software Developer",
              isPartOf: {
                "@type": "WebSite",
                url: "https://pauladaimi.com",
              },
            }),
          }}
          key="webpage-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://pauladaimi.com/",
                },
              ],
            }),
          }}
          key="breadcrumbs-jsonld"
        />
      </Head>
      <AnimatedTextCoordinatorProvider shouldStart={!isAnimating}>
        <Index />
      </AnimatedTextCoordinatorProvider>
    </>
  );
}
