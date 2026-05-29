import styles from './card.module.css';
import Image from 'next/image';

type CardProps = {
	flip?: boolean;
	title?: string;
	text?: string;
	imageSrc?: string;
	imageAlt?: string;
	imageWidth?: number;
	imageHeight?: number;
	imageRounded?: boolean;
	imageLoading?: 'lazy' | 'eager';
};

export default function Card({ flip, title, text, imageSrc, imageAlt, imageWidth, imageHeight, imageRounded, imageLoading }: CardProps) {
	const imageBlock = imageSrc && (
		<div className={styles.imageContainer}>
			{imageSrc && (
				<Image
					className={imageRounded ? `${styles.imageRounded}` : `${styles.imageSquared}`}
					src={imageSrc}
					alt={imageAlt ?? 'A picture'}
					width={imageWidth ?? 300}
					height={imageHeight ?? 300}
					style={{ width: '50%', height: 'auto' }}
					loading={imageLoading}
					sizes='(max-width: 768px) 80vw, 300px'
				/>
			)}
		</div>
	);

	const textBlock = text && (
		<div className={styles.textContainer}>
			{title && <h2 className={styles.cardTitle}>{title}</h2>}
			{text && <p className={styles.aboutInformation}>{text}</p>}
		</div>
	);

	return (
		<div className={styles.cardContainer}>
			{flip ?
				<>
					{textBlock}
					{imageBlock}
				</>
			:	<>
					{imageBlock}
					{textBlock}
				</>
			}
		</div>
	);
}
