import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const { push } = useRouter();
    
    const handlerLogin = () => {
        // Simulasi login berhasil
        localStorage.setItem('isLoggedIn', 'true');
        push('/produk');
    }

    return (
        <div>
            <h1>Halaman Login</h1>
            <form onSubmit={(e) => { e.preventDefault(); handlerLogin(); }}>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <br />
            <p>Belum punya akun? <Link href="/auth/register">Daftar sekarang</Link></p>
        </div>
    );
};

export default halamanLogin;