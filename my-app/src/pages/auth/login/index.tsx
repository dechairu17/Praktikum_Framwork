import Link from "next/link";
import { useRouter } from "next/router";
// import styles from './login.module.css';
import styles from './login.module.scss';


const tampilanLogin = () => {
    const { push } = useRouter();
    
    const handlerLogin = () => {
        // Simulasi login berhasil
        // localStorage.setItem('isLoggedIn', 'true');
        push('/produk');
    }

    return (
        <div className={`${styles.login} flex flex-col items-center justify-center min-h-screen bg-gray-100`}>
            <h1 className="text-3xl font-bold text-blue-600 mb-4">Halaman Login</h1>
            <button onClick={()=> handlerLogin()} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4">Login</button><br />
            <h1 className="text-red-500 border border-red-500 rounded px-2 py-1 mb-2">Belum punya akun</h1>
            <Link href="/auth/register" className="text-blue-500 hover:underline">Daftar sekarang</Link>
        </div>
    );
};

export default tampilanLogin;