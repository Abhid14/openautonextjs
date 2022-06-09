import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import SocialBar from '../components/SocialBar'
import DownBtn from '../components/DownBtn'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Open Auto</title>
        <meta name="description" content="Vehicle Maintenance From The Comfort of Your Home." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-primary text-white'>
        <NavBar />
        <section className='container lg:mt-0 mt-4 flex lg:flex-row flex-col justify-center items-center'>
          <div className='flex z-10 lg:text-left text-center flex-col gap-4 lg:gap-8 lg:items-start lg:justify-start items-center justify-center'>
            <h1 className='lg:font-semibold leading-tight font-bold text-[28px] lg:text-[40px]'>
              Vehicle Maintenance From The Comfort of Your Home
            </h1>
            <p className='font-thin text-[12px] lg:text-[14px] '>
              Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with the unexpected repairs worry-free.
            </p>
            <ContactForm />
          </div>
          <img className='lg:h-[520px] h-auto lg:w-auto w-[80vw] lg:mt-0 mt-12 z-10 my-2' src='/hHero1.png' />
          <img className='absolute lg:ml-16 h-auto lg:w-auto w-[90vw] opacity-40' src='/worldmap.png' />
        </section>
        <section className='container flex lg:flex-row lg:mt-0 mt-8 mb-8 justify-center lg:justify-between'>
          <div className='w-[30%] hideMob'></div>
          <Link href="#hero2">
            <a className='w-[30%] hideMob  hover:rotate-180 flex flex-row justify-center'>
              <img className='h-[45px] self-center' src='/OAScrollAction.png' />
            </a></Link>
          <div className='lg:w-[30%] flex items-center justify-end'>
            <SocialBar />
          </div>
        </section>
        <div className='w-full bg-secondary flex flex-col items-center justify-center'>
          <section id='hero2' className='container bg-secondary items-center flex lg:flex-row flex-col lg:justify-between py-6 lg:py-8'>
            <img className='lg:order-1 mt-10 order-2 lg:h-[400px] h-auto w-[80vw] lg:w-auto lg:my-16' src='/hHero2.png' />
            <div className='lg:order-2 order-1 flex lg:w-[600px] gap-7 flex-col lg:items-start lg:justify-start'>
              <h1 className='lg:font-semibold leading-tight lg:text-left text-center font-bold lg:w-[300px] text-[30px] lg:text-5xl'>
                Focused on Time Saving
              </h1>
              <p className='lg:text-left lg:text-[16px] text-[15px] text-center font-thin'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
              </p>
              <DownBtn />
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  )
}
