import { useMemo } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import Head from "next/head";
import Image from "next/image";
import AnimatedTitle from "./Global/AnimatedTitle";
import { useRouter } from "next/router";
import { AnimatedTitleProvider } from "./Global/AnimatedTitleProvider";

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
        <title>Paul Adaimi</title>
        <meta
          name="description"
          content="Portfolio of Paul Adaimi, Software Developer"
        />
        <link rel="icon" href="logo-icon.png" />
      </Head>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <p className={styles.logoText}>PA</p>
        </Link>
        <div className={styles.headerRight}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
            <Link href="/about" className={styles.link}>
              About
            </Link>
            <Link href="/projects" className={styles.link}>
              Projects
            </Link>
          </nav>
          <div className={styles.contact}>
            <a
              style={{ height: "25px" }}
              className={styles.link}
              href="https://github.com/paul-adaimi"
              target="_blank"
              rel="noopener noreferrer"
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
              href="mailto:paul@adaimi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="svg/mail.svg"
                alt="Mail Icon"
                width={25}
                height={25}
              />
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
            {children}
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
