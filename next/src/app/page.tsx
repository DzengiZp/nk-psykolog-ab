import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import './index.css';

export default function Home() {
  return (
    <main>
      <h1>Nathalie Korhonen Psykolog AB</h1>
      <Image
        className='profilepic'
        src='/nathalie-profilbild.jpg'
        alt='Nathalie Korhonen Profile'
        width={250}
        height={250}
        loading='eager'
      />
    </main>
  );
}
