import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
    
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
        <h1>Halaman Produk</h1>
        <p>Produk: {id ?? ''}</p>
        <p>
          <Link href="/produk">Kembali ke daftar produk</Link>
        </p>
      </main>
    </>
  )
}
