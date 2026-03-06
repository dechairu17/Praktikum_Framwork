import Link from "next/link";

const halamanRegister = () => {
    return (
        <div>
            <h1>Halaman Register</h1>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            <br />
            <p>Sudah punya akun? <Link href="/auth/login">Kembali ke login</Link></p>
        </div>
)};

export default halamanRegister;