import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import SocialBar from '../components/SocialBar'
import DownBtn from '../components/DownBtn'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Open Auto</title>
        <meta name="description" content="Vehicle Maintenance From The Comfort of Your Home." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-primary text-white'>
        <NavBar />
        <section className='container flex lg:flex-row flex-col items-center'>
          <div className='flex flex-col gap-8 lg:items-start lg:justify-start items-center justify-center'>
            <h1 className='font-semibold lg:text-5xl'>
              Vehicle Maintenance From The Comfort of Your Home
            </h1>
            <p className='font-thin'>
              Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with the unexpected repairs worry-free.
            </p>
            <ContactForm />
          </div>
          <img className='lg:h-[520px] my-2' src='/hHero1.png' />
        </section>
        <section className='container flex lg:flex-row lg:mb-8 lg:justify-between'>
          <div className='w-[30%]'></div>
          <Link href="#hero2">
            <a className='w-[30%]  hover:rotate-180 flex flex-row justify-center'>
              <img className='h-[45px] self-center' src='/OAScrollAction.png' />
            </a></Link>
          <div className='w-[30%] flex items-center justify-end'>
            <SocialBar />
          </div>
        </section>
        <div className='w-full bg-secondary flex flex-col items-center justify-center'>
          <section id='hero2' className='container bg-secondary items-center flex lg:flex-row lg:justify-between py-8'>
            <img className='lg:h-[400px] lg:my-16' src='/hHero2.png' />
            <div className='flex lg:w-[600px] gap-7 flex-col lg:items-start justify-start'>
              <h1 className='font-semibold lg:w-[300px] lg:text-5xl'>
                Focused on Time Saving
              </h1>
              <p className='font-thin'>
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
