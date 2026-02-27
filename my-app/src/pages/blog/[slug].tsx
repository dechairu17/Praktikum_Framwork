import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
    
export default function HalamanBlog() {
  const Router = useRouter()
  console.log(Router)

  const { slug: id } = Router.query

  return (
    <>
      <Head>
        <title>Halaman blog</title>
      </Head>
      <main style={{ padding: 24 }}>
        <h1>Halaman Blog</h1>
        <p>Blog: {id ?? ''}</p>
        <p>
          <Link href="/blog">Kembali ke daftar blog</Link>
        </p>
      </main>
    </>
  )
}
