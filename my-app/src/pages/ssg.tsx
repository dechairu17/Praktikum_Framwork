import TampilanProduk from '../views/product';
import { ProductType } from '../types/Product.type';

interface SSGPageProps {
    products: ProductType[];
}

const SSGPage = ({ products }: SSGPageProps) => {
    return (
        <div>
            <h1>Halaman SSG (Static Site Generation)</h1>
            <p>Data produk di-fetch saat build dan halaman di-generate secara statis.</p>
            <TampilanProduk products={products} />
        </div>
    );
};

export default SSGPage;

export async function getStaticProps() {
    try {
        const res = await fetch('http://127.0.0.1:3000/api/produk');
        const response: { data: ProductType[] } = await res.json();

        return {
            props: {
                products: response.data,
            },
            revalidate: 60, // Re-generate setiap 60 detik jika ada request
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            props: {
                products: [],
            },
        };
    }
}