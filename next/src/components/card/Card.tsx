import styles from './card.module.css';
import Image from 'next/image';

type CardProps = {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageRounded?: boolean;
  imageLoading?: 'lazy' | 'eager';
  text?: string;
  flip?: boolean;
};

export default function Card({ title, imageSrc, imageAlt, text, imageWidth, imageHeight, imageRounded, imageLoading, flip }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      {flip ?
        <>
          <div className={styles.textContainer}>
            {title && <h2 className={styles.cardTitle}>{title}</h2>}
            {text && <p className={styles.aboutInformation}>{text}</p>}
          </div>
          <div className={styles.imageContainer}>
            {imageSrc && (
              <Image
                className={imageRounded ? `${styles.imageRounded}` : `${styles.imageSquared}`}
                src={imageSrc}
                alt={imageAlt ?? ''}
                width={imageWidth}
                height={imageHeight}
                loading={imageLoading}
              />
            )}
          </div>
        </>
      : <>
          <div className={styles.imageContainer}>
            {imageSrc && (
              <Image
                className={imageRounded ? `${styles.imageRounded}` : `${styles.imageSquared}`}
                src={imageSrc}
                alt={imageAlt ?? ''}
                width={imageWidth}
                height={imageHeight}
                loading={imageLoading}
              />
            )}
          </div>
          <div className={styles.textContainer}>
            {title && <h2 className={styles.cardTitle}>{title}</h2>}
            {text && <p className={styles.aboutInformation}>{text}</p>}
          </div>
        </>
      }
    </div>
  );
}
