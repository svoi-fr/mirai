import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import StyledButton from '../components/button/styled-button';
import StyledLink from '../components/link/link';
import Menu from '../components/menu/menu';
import { Advantage } from '../components/advantage/advantage';

import advantages from '../consts/advantages.json';
import { title } from 'process';
import { IconType } from '@/consts/consts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <section>
          {/* <Logo /> */}
          <Menu />
        </section>
      </header>

      <main className={styles.main}>
        <div className={styles.adaptiveContainer}>
          <div className={styles.hero}>
            <div className={styles.heroContainer}>
              <h1>
                <span color="#00A2AF">AI Assistant</span>{' '}
                <span>for Refugees in Europe and Those Who Help Them</span>
              </h1>
              <p>Get Instant Answers to Important Questions</p>
              <StyledButton onClick={() => console.log('Button clicked')}>
                Start Chatting
              </StyledButton>
              <StyledButton
                variant="secondary"
                onClick={() => console.log('Button clicked')}
              >
                Donate
              </StyledButton>
            </div>
            <div className="desktop first--right">Image</div>
          </div>
        </div>

        <section className={styles.about}>
          <div className={styles.adaptiveContainer}>
            <div className="desktop about--left">Image</div>
            <div className="about--right">
              <h2 className={styles.subtitle}>About the Project</h2>
              <p>
                We understand how difficult it can be to navigate through a
                mountain of information when you first arrive in a new country.
                Where should you go? Whom should you contact? What should you
                do?
                <br />
                The MirAI chatbot, powered by artificial intelligence, helps
                displaced persons in Europe feel more comfortable in their new
                surroundings. If you are a refugee who has recently arrived in
                Europe or an organization providing support to them, this bot is
                for you. It is especially useful for those who do not speak the
                language of the host country.
                <br />
                You will receive instant answers to important questions: about
                rights and responsibilities, legal procedures, medical
                assistance, as well as educational and employment opportunities.
              </p>
            </div>
          </div>
        </section>

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
              {advantages.map((advantage) => (
                <Advantage
                  icon={advantage.icon as IconType}
                  title={advantage.title}
                  description={advantage.description}
                />
              ))}
            </ul>
          </div>
        </section>

        <section className="pre-footer">
          <Menu />
        </section>
      </main>

      <footer className={styles.footer}>
        <section>
          <p>© 2024 Mir ai - Tech startup . All Rights Reserved.</p>
          <div>
            <p>Follow us:</p>
            <ul>
              <li>Telegram</li>
            </ul>
          </div>
        </section>
      </footer>
    </div>
  );
}
