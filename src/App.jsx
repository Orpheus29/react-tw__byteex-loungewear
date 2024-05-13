import {
  Header,
  Hero,
  // CustomerReviews,
  // Footer,
  // PopularProducts,
  // Services,
  // SpecialOffer,
  // Subscribe,
  // SuperQuality,
} from './sections';

export default function App() {
  return (
      <main className='relative'>
        <Header />
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero />
        </section>
      </main>
  );
}
