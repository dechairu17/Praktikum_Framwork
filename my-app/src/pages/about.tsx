import Head from 'next/head'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Data mahasiswa  Adi Bayu Samudra" />  
      </Head>
      <h1>ini halaman about</h1>
    </>
  )
}