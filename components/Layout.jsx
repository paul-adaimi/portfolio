import { useMemo } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import Head from "next/head";
import Image from "next/image";
import AnimatedTitle from "./Global/AnimatedTitle";
import { useRouter } from "next/router";
import {
  AnimatedTitleProvider,
  KeepMounted,
} from "./Global/AnimatedTitleProvider";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentPage = router.pathname;

  const currentTitle = useMemo(() => {
    switch (currentPage) {
      case "/about":
        return "About Me";
      case "/projects":
        return "My Projects";
      default:
        return "Paul Adaimi";
    }
  }, [currentPage]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Paul Adaimi's Portfolio, Software Developer"
          key="desc"
        />
        <meta
          name="keywords"
          content="Paul Adaimi, Software Developer, Portfolio, Web Development, Mobile Developer"
          key="keywords"
        />
        <meta name="author" content="Paul Adaimi" key="author" />
        <link rel="icon" href="logo-icon.png" key="icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Paul Adaimi",
              jobTitle: "Software Developer",
              url: "https://pauladaimi.com",
              image: "https://pauladaimi.com/images/paul-adaimi.jpg",
              description:
                "Paul Adaimi is a software developer specializing in web and mobile app development.",
              sameAs: [
                "https://linkedin.com/in/paul-adaimi",
                "https://github.com/paul-adaimi",
                "https://twitter.com/paul-adaimi",
              ],
              knowsAbout: [
                "JavaScript",
                "React",
                "Next.js",
                "Mobile Development",
                "React Native",
                "Expo",
              ],
            }),
          }}
          key="person-jsonld"
        />
      </Head>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <p className={styles.logoText}>PA</p>
        </Link>
        <div className={styles.headerRight}>
          <nav className={styles.nav}>
            <NavigationLink href="/" className={styles.link}>
              Home
            </NavigationLink>
            <NavigationLink href="/about" className={styles.link}>
              About
            </NavigationLink>
            <NavigationLink href="/projects" className={styles.link}>
              Projects
            </NavigationLink>
          </nav>
          <div className={styles.contact}>
            <a
              style={{ height: "25px" }}
              className={styles.link}
              href="https://github.com/paul-adaimi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Paul Adaimi's GitHub profile"
            >
              <Image
                src="svg/github.svg"
                alt="GitHub Icon"
                width={25}
                height={25}
              />
            </a>
            <a
              style={{ height: "25px" }}
              className={styles.link}
              href="https://www.linkedin.com/in/paul-adaimi-aa5b76172"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Paul Adaimi's LinkedIn profile"
            >
              <Image
                src="svg/linkedin.svg"
                alt="LinkedIn Icon"
                width={25}
                height={25}
              />
            </a>
            <a
              style={{ height: "25px" }}
              className={styles.link}
              href="mailto:hello@pauladaimi.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send a mail to Paul Adaimi"
            >
              <Image
                src="svg/mail.svg"
                alt="Mail Icon"
                width={25}
                height={25}
              />
            </a>
          </div>
          <div className={styles.cv}>
            <a
              className={`${styles.link} ${styles.cvLink}`}
              href="/CV Paul Adaimi.pdf"
              download
              aria-label="Download Paul Adaimi's CV"
            >
              <Image
                src="svg/download-paper.svg"
                alt="Download CV Icon"
                width={25}
                height={25}
              />
              <p style={{ margin: 0, fontSize: 8 }}>CV</p>
            </a>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <AnimatedTitleProvider>
          <div className={styles.content}>
            <div className={styles.titleContainer}>
              <AnimatedTitle>{currentTitle}</AnimatedTitle>
            </div>
            <KeepMounted>{children}</KeepMounted>
          </div>
        </AnimatedTitleProvider>
      </main>
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Paul Adaimi. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;

const NavigationLink = ({ href, children, className }) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  const handleClick = (e) => {
    if (router.pathname === href) {
      e.preventDefault(); // Prevent navigation if already on the page
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} ${styles.navigationLinkTextContainer} ${
        isActive ? styles.active : ""
      }`}
    >
      {children}
      <div
        className={`${styles.linkUnderline} ${isActive ? styles.active : ""}`}
      ></div>
    </Link>
  );
};
