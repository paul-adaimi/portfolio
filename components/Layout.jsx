// components/Layout.js
import Link from "next/link";
import styles from "./Layout.module.css";
import Head from "next/head";
import Image from "next/image";

const Layout = ({ children }) => {
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
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Paul Adaimi. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Layout;
