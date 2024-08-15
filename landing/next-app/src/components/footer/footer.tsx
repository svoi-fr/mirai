import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>© 2024 Mir ai - Tech startup . All Rights Reserved.</p>
        <div className={styles.footerSocials}>
          <p>Follow us:</p>
          <ul>
            <li>Telegram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
