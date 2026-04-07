import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HeroSection = () => (
  <div>
    <h1>Halaman Produk</h1>
    <p>Selamat datang di halaman produk!</p>
  </div>
);

const MainSection = ({ onLogout }: { onLogout: () => void }) => (
  <div>
    <br />
    <button onClick={onLogout}>Logout</button>
    <br />
    <Link href="/auth/login">← Kembali ke Login</Link>
  </div>
);

const ProdukPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage or session)
    const userLogin = localStorage.getItem('isLoggedIn');

    if (!userLogin) {
      // Redirect to login if not authenticated
      router.push('/auth/login');
    } else {
      setIsLogin(true);
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    // Clear login status
    localStorage.removeItem('isLoggedIn');
    // Redirect to login
    router.push('/auth/login');
  };

  if (isLoading) {
    return <div><h1>Loading...</h1></div>;
  }

  if (!isLogin) {
    return null;
  }

  return (
    <div>
      <HeroSection />
      <MainSection onLogout={handleLogout} />
    </div>
  );
};

export default ProdukPage;