import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StyledButton from "../components/button/styled-button";
import StyledLink from "../components/link/link";
import Menu from "../components/menu/menu";
import { Advantage } from "../components/advantage/advantage";

import advantages from '../consts/advantages.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <Menu />
        </header>
      <StyledButton onClick={() => console.log("Button clicked")}>Start Chatting</StyledButton>
      <StyledLink href="/about">About</StyledLink>
      <StyledButton variant='secondary' onClick={() => console.log("Button clicked")}>Fund us</StyledButton>
      <StyledLink variant='secondary' href="/about">Hell yeah</StyledLink>

      <div className={styles.blueBlock}>
        <div className={styles.title}>
          Advantages
        </div>
        <div className={styles.advantagesWrapper}>
          {advantages.map((advantage, index) => <Advantage />)} 
        </div>
      </div>

      </main>
     

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
