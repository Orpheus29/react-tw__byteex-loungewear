import {
  About,
  Benefits,
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
      <section className='max-w-screen-small my-0 mx-auto wide:max-w-screen-wide'>
        <Hero />
      </section>
      <section className='bg-gradient-to-b from-primary-bg via-transparent to-transparent -mt-16 wide:-mt-20'>
        <Benefits />
      </section>
      <section className='bg-secondary-bg pt-10 wide:pt-[83px] pb-14'>
        <About />
      </section>
    </main>
  );
}
