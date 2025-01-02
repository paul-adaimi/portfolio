// components/Layout.js
import Link from "next/link";
import styles from "./Layout.module.css";
import Head from "next/head";

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
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </nav>
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
