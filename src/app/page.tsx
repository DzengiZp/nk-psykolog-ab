import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>Nathalie Korhonen Psykolog AB</h1>
      <Image
        src="/nathalie-profilbild.jpg"
        alt='Nathalie Korhonen Profile'
        width={250}
        height={250}
        loading='lazy'></Image>
    </>
  );
}
