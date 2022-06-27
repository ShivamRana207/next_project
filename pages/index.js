import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Codeswear</title>
        <meta name="description" content="Find best books at best price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Image src="/home.jpg" width="500" height="500" />
      <Footer/>

    </div>
  )
}
