import TampilanProduk from '../views/product';
import { ProductType } from '../types/Product.type';

interface SSRPageProps {
    products: ProductType[];
}

const SSRPage = ({ products }: SSRPageProps) => {
    return (
        <div>
            <h1>Halaman SSR (Server-Side Rendering)</h1>
            <p>Data produk di-fetch di sisi server pada setiap request.</p>
            <TampilanProduk products={products} />
        </div>
    );
};

export default SSRPage;

export async function getServerSideProps() {
    try {
        const res = await fetch('http://127.0.0.1:3000/api/produk');
        const response: { data: ProductType[] } = await res.json();

        return {
            props: {
                products: response.data,
            },
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