import { useEffect, useState } from 'react';
import TampilanProduk from '../views/product';
import { ProductType } from '../types/Product.type';

const CSRPage = () => {
    const [products, setProducts] = useState<ProductType[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/produk');
                const response: { data: ProductType[] } = await res.json();
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Halaman CSR (Client-Side Rendering)</h1>
            <p>Data produk di-fetch di sisi client setelah halaman dimuat.</p>
            <TampilanProduk products={products} />
        </div>
    );
};

export default CSRPage;