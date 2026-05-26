import styles from "./header.module.css"

const buttons = [
    { Title: "Startsida", Slug: "/" },
    { Title: "Om Mig", Slug: "/about" },
    { Title: "Psykoterapi", Slug: "/psykoterapi" },
    { Title: "Kontakt", Slug: "/contact" }
]

export default function Header() {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>Nathalie Korhonen Psykolog AB</h1>
            <div className={styles.headerButtonsContainer}>
                {buttons.map(button => <button className={styles.headerButtons}>{button.Title}</button>)}
            </div>
        </header>
    );
};