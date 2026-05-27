import styles from './header.module.css';
import Image from 'next/image';

const buttons = [
  { Title: 'Startsida', Slug: '/' },
  { Title: 'Om Mig', Slug: '/about' },
  { Title: 'Psykoterapi', Slug: '/psykoterapi' },
  { Title: 'Kontakt', Slug: '/contact' },
];

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      {/* <Image src={"/logo.svg"} alt={""} width={569} height={40} /> */}
      <div className={styles.headerButtonsContainer}>
        {buttons.map(button => (
          <button
            key={button.Title}
            className={styles.headerButtons}>
            {button.Title}
          </button>
        ))}
      </div>
    </header>
  );
}
