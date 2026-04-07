import Link from "next/link";
import styles from "./register.module.css";

const halamanRegister = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Halaman Register</h1>
            <form className={styles.form}>
                <input type="email" placeholder="Email" className={styles.input} required />
                <input type="password" placeholder="Password" className={styles.input} required />
                <button type="submit" className={styles.button}>Register</button>
            </form>
            <br />
            <p>Sudah punya akun? <Link href="/auth/login" className={styles.link}>Kembali ke login</Link></p>
        </div>
    );
};

export default halamanRegister;