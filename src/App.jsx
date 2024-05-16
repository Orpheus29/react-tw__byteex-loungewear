import {
  About,
  Benefits,
  Header,
  Hero,
  Comfort,
  FansComments,
  FAQ,
  Info,
  Footer,
} from './sections';

export default function App() {
  return (
    <main className='relative'>
      <section className='bg-primary-bg'>
        <Header />
      </section>
      <section className='max-w-screen-small wide:max-w-screen-wide mx-auto'>
        <Hero />
      </section>
      <section className='bg-gradient-to-b from-primary-bg via-transparent to-transparent -mt-16 wide:-mt-20'>
        <Benefits />
      </section>
      <section className='bg-secondary-bg pt-10 wide:pt-[83px] pb-14'>
        <About />
      </section>
      <section className='pt-[57px] wide:pt-[75px] pb-[59px] wide:pb-[74px] max-w-[1120px] mx-auto'>
        <Comfort />
      </section>
      <section className='pb-[68px] wide:pb-[109px]'>
        <FansComments />
      </section>
      <section className='pb-[52px] wide:pb-[88px] max-w-[1110px] mx-auto'>
        <FAQ />
      </section>
      <section className='bg-secondary-bg pt-[52px] wide:pt-[39px] pb-14 wide:pb-8'>
        <Info />
      </section>
      <section className='bg-gradient-to-b from-transparent via-transparent to-primary-bg py-[56px] wide:py-[83px]'>
        <Footer />
      </section>
    </main>
  );
}
