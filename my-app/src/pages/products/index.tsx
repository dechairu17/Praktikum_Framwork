import useSWR from "swr";
import TampilanProduk from "../../views/product";
import fetcher from "../../utils/swr/fetcher";
import type { ProductType } from "../../types/Product.type";

const ProductsCSR = () => {
    const { data, error } = useSWR("/api/produk", fetcher);
    const products: ProductType[] | null = data?.data ?? null;

    return (
        <div>
            <h1>Products (CSR)</h1>
            {error && <p>Gagal memuat produk.</p>}
            <TampilanProduk products={products} />
        </div>
    );
};

export default ProductsCSR;
