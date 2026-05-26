import Image from 'next/image';
import IndexPage from '@/components/page';

export default function Home() {
  return (
    <main>
      <h2>Nathalie Korhonen Psykolog AB</h2>
      <Image
        className='profilepic'
        src='/nathalie-profilbild.jpg'
        alt='Nathalie Korhonen Profile'
        width={250}
        height={250}
        loading='eager'
      />
      <IndexPage />
      <h2>Nathalie Korhonen Psykolog AB</h2>
      <Image
        className='profilepic'
        src='/nathalie-profilbild.jpg'
        alt='Nathalie Korhonen Profile'
        width={250}
        height={250}
        loading='eager'
      />
      <IndexPage />
      <h2>Nathalie Korhonen Psykolog AB</h2>
      <Image
        className='profilepic'
        src='/nathalie-profilbild.jpg'
        alt='Nathalie Korhonen Profile'
        width={250}
        height={250}
        loading='eager'
      />
      <IndexPage />
      <h2>Nathalie Korhonen Psykolog AB</h2>
      <Image
        className='profilepic'
        src='/nathalie-profilbild.jpg'
        alt='Nathalie Korhonen Profile'
        width={250}
        height={250}
        loading='eager'
      />
      <IndexPage />
    </main>
  );
}
