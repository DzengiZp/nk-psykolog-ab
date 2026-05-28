import Link from 'next/link';
import styles from './header.module.css';
import Image from 'next/image';

const linkButtons = [
	{ title: 'Startsida', href: '/' },
	{ title: 'Om mig', href: '/aboutme' },
	{ title: 'Psykoterapi', href: '/therapy' },
	{ title: 'Kontakt', href: '/contact' },
];

export default function Header() {
	return (
		<header className={styles.headerContainer}>
			<Link href={"/"}>
				<Image
					src={'/logo.svg'}
					alt={''}
					width={569}
					height={40}
				/>
			</Link>
			<div className={styles.headerButtonsContainer}>
				{linkButtons.map(link => (
					<Link
						key={link.title}
						className={styles.headerButtons}
						href={link.href}>
						{link.title}
					</Link>
				))}
			</div>
		</header>
	);
}
