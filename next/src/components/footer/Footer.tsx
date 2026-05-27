import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.copyrightNotice}>© 2024 Nathalie Korhonen Psykolog AB. All rights reserved.</p>
    </footer>
  );
};
