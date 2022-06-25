import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Codeswear</title>
        <meta name="description" content="Find best books at best price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 className='mx-4'>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className='mx-4'>
          Get started by editing{' '}
          <code >pages/index.js</code>
        </p>

        
      </main>

     
    </div>
  )
}
