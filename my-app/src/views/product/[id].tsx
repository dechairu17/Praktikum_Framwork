import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const HeroSection = ({ id }: { id: string | string[] | undefined }) => (
  <div>
    <h1>Halaman Produk</h1>
    <p>Produk: {id ?? ''}</p>
  </div>
);

const MainSection = () => (
  <div>
    <p>
      <Link href="/produk">Kembali ke daftar produk</Link>
    </p>
  </div>
);

export default function HalamanProduk() {
  const Router = useRouter()
  console.log(Router)

  const { id } = Router.query

  return (
    <>
      <Head>
        <title>Halaman Produk</title>
      </Head>
      <main style={{ padding: 24 }}>
        <HeroSection id={id} />
        <MainSection />
      </main>
    </>
  )
}