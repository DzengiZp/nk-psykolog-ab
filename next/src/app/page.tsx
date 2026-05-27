import Image from 'next/image';
import HeroImage from '../../public/ship.jpg';
import styles from './page.module.css';
import Card from '../components/card/Card';
import Form from '@/components/form/Form';

export default function Startpage() {
  return (
    <div className={styles.startPageContainer}>
      <section className={styles.heroImageContainer}>
        <h1 className={styles.heroTitle}>PSYKOLOGMOTTAGNING NATHALIE KORHONEN</h1>
        <Image
          className={styles.heroImage}
          src={HeroImage}
          alt='Hero Ship Image'
          priority
          fill
        />
      </section>
      <section className={styles.aboutContainer}>
        <Card
          title='Vem är jag?'
          imageSrc='/nathalie-profilbild.jpg'
          imageAlt='Nathalie Korhonen Profile'
          imageWidth={300}
          imageHeight={300}
          imageLoading='eager'
          imageRounded={true}
          text='Mitt namn är Nathalie Korhonen och jag arbetar som legitimerad psykolog. Jag erbjuder psykoterapi för dig som kanske fastnat i nedstämdhet, oro, ångest, stress eller är i kris och behöver hjälp att ta dig vidare. Jag erbjuder både kortare och längre terapier, med ett integrativt arbetssätt för att anpassa metod efter dina behov och förutsättningar.'
        />
      </section>
      <section className={styles.aboutContainer}>
        <Card
          flip={true}
          title='Mer om mig'
          imageSrc='/psf.jpg'
          imageAlt='Nathalie Korhonen Profile'
          imageWidth={300}
          imageHeight={300}
          imageLoading='eager'
          imageRounded={true}
          text='Jag är legitimerad psykolog med psykoterapiutbildning i KBT (kognitiv beteendeterapi), PDT (psykodynamisk terapi) samt IPT (interpersonell terapi). Jag är utbildad på Göteborgs Universitet. Mitt sätt att arbeta är integrativt vilket betyder att jag försöker anpassa metod efter dina behov och förutsättningar. Att arbeta integrativt kan exempelvis vara genom att i en psykodynamisk terapi med fokus på exempelvis uppväxt och relationer också kombinera med hemuppgifter för att öva/utmana dig mellan våra samtal. Jag tror på vikten av en trygg relation mellan dig och din psykolog för att skapa bra förutsättningar att våga utforska och prata om känslor som väcks.'
        />
      </section>
      <section className={styles.aboutContainer}>
        <Card
          title='Psykoterapi'
          imageSrc='/psychotherapy.webp'
          imageAlt='Blommor'
          imageWidth={500}
          imageHeight={300}
          imageLoading='eager'
          text='Alla kan ibland vara i behov av att få prata med någon utomstående om hur man har det. Tillsammans med någon annan reflektera kring ens val och livssituation. Ibland söker man en tydlig förändring, och ibland är målet att förstå sig själv bättre. Psykoterapi handlar i stort om att utforska det som blir svårt för dig här och nu och vilka mönster i ditt liv som kanske behöver förändras. Ett tydligt mål inom psykoterapi är att öka din förståelse kring dig själv så att du ska kunna ta mer medvetna val som rör ditt liv. I samtalen reflekterar vi tillsammans och du får en möjlighet att i din egen takt utforska, förstå och förändra. Ibland har vi ett tydligt fokus i vår kontakt, ex. en separation, relation, traumatisk händelse osv, och ibland är kontakten mer flytande och utforskande.'
        />
      </section>
      <section className={styles.aboutContainer}>
        <Card
          title='Första samtal'
          flip={true}
          imageSrc='/blommor.jpg'
          imageAlt='Nathalie Korhonen Profile'
          imageWidth={400}
          imageHeight={500}
          imageLoading='eager'
          text='Under vårt första samtal kommer jag att förklara hur vi tillsammans kan arbeta och vilka ramar som gäller under vår kontakt. Bra information att veta redan nu är:
          Jag arbetar under tystnadsplikt.
          Jag journalför våra samtal.
          Jag är enligt lag skyldig att anmäla oro kring ett barn som far illa till socialtjänsten.
          Jag är medlem i Psykologförbundet och Psykologföretagarna.
          Du som patient skyddas därmed av patientförsäkring enligt patientsäkerhetslagen 2010:65.
          Jag står under tillsyn av Inspektionen för vård och omsorg.
          Jag behandlar dina personuppgifter enligt GDPR.
          Som medlem av Sveriges psykologförbund och Psykologföretagarna i Sverige arbetar jag enligt förbundets yrkesetiska principer för psykologer i Norden och kvalitetssäkrar mitt arbete Verksamheten lyder under Hälso- och sjukvårdslagen, sekretesslagen och journalföringslagen då behandlingen bedrivs av legitimerad personal.'
        />
      </section>
      <section className={styles.formContainer}>
        <Form />
      </section>
    </div>
  );
}
