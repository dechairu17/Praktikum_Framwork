import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layouts/navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Praktikum Next.js pages router</title>
      </head>
        <h1>Praktikum Next.js pages router</h1> <br />
        <p>Mahasiswa D4 Pengembangan Web</p>
    </div>
  )
}
