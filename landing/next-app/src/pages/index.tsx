import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import StyledButton from '../components/button/styled-button';
import StyledLink from '../components/link/link';
import Menu from '../components/menu/menu';

import { Advantage } from '../components/sections/advantage/advantage';
import { Footer } from '../components/footer/footer';

import advantages from '../consts/advantages.json';
import { title } from 'process';
import { IconType } from '@/consts/consts';
import cn from 'classnames';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MirAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <section>
          {/* <Logo /> */}
          <Menu />
        </section>
      </header>

      <main className={styles.main}>
        <div className={styles.heroBackground}>
          <div className={styles.adaptiveContainer}>
            <div className={styles.hero}>
              <div className={styles.heroContainer}>
                <h1>
                  <span className={styles.mainTitle}>AI Assistant</span>{' '}
                  <span>for Refugees in Europe and Those Who Help Them</span>
                </h1>
                <p>Get Instant Answers to Important Questions</p>
                <StyledButton size="large" onClick={() => console.log('Button clicked')}>
                  Start Chatting
                </StyledButton>
                {/* <StyledButton
                  variant="secondary"
                  onClick={() => console.log('Button clicked')}
                >
                  Donate
                </StyledButton> */}
              </div>
              <div className={styles.heroImage}><img src="/logo.png" /></div>
            </div>
          </div>
        </div>


          <div className={styles.aboutBackground}>
            <div className={styles.adaptiveContainer}>
            <div className={styles.about}>
              <div className={styles.aboutImage}><img src="/mobile.png" /></div>
              <div className={styles.aboutRight}>
                <h2 className={styles.subtitle}>About the Project</h2>
                <p>
                  We understand how difficult it can be to navigate through a
                  mountain of information when you first arrive in a new
                  country. Where should you go? Whom should you contact? What
                  should you do?
                  <br />
                  <br />
                  The MirAI chatbot, powered by artificial intelligence, helps
                  displaced persons in Europe feel more comfortable in their new
                  surroundings. If you are a refugee who has recently arrived in
                  Europe or an organization providing support to them, this bot
                  is for you. It is especially useful for those who do not speak
                  the language of the host country.
                  <br />
                  <br />
                  You will receive instant answers to important questions: about
                  rights and responsibilities, legal procedures, medical
                  assistance, as well as educational and employment
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.howItWorks}>
          <div className={styles.adaptiveContainer}>
            <h2 className={styles.subtitle}>How It Works?</h2>
            <p>
              We gather data from relevant communities and official websites,
              verify it, pass it to the bot, and it uses algorithms to find the
              context and provide you with the necessary information.
            </p>
            <StyledButton
              variant="secondary"
              size="large"
              onClick={() => console.log('Button clicked')}
            >
              Start Chatting
            </StyledButton>
          </div>
        </section>

        <section className={styles.advantages}>
          <div className={styles.adaptiveContainer}>
            <h2 className={styles.subtitle}>Advantages</h2>
            <ul>
              {advantages.map((advantage, index) => (
                <Advantage
                  key={index}
                  icon={advantage.icon as IconType}
                  title={advantage.title}
                  description={advantage.description}
                />
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.preFooter}>
          <Menu />
        </section>
      </main>

      <Footer />
    </div>
  );
}
