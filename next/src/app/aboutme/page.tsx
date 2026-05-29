import Image from 'next/image';
import styles from './aboutme.module.css';
import HeroImage from '../../../public/ship.jpg';

export default function AboutMePage() {
	return (
		<>
			<section className={styles.heroImageSectionContainer}>
				<Image
					className={styles.heroImage}
					src={HeroImage}
					alt='Hero Ship Image'
					priority
					fill
				/>
			</section>
		</>
	);
}
