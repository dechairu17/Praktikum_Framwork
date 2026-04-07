import Head from "next/head";
import Link from "next/link";
import styles from "./404.module.scss";

const Custom404 = () => {
    return (
        <>
            <Head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </Head>
            <div className={styles.error}>
                <img src="/page-not-found.png" alt="404 Illustration" className={styles.error__image} />
                <h1>404 Halaman tidak ditemukan</h1>
                <p>Maaf, halaman yang Anda cari tidak ditemukan. Silakan kembali ke halaman utama.</p>
                <Link href="/" className={styles.error__button}>Kembali ke Home</Link>
            </div>
        </>
    );
};

export default Custom404;