import useSWR from "swr";
import TampilanProduk from "../../views/product";
import fetcher from "../../utils/swr/fetcher";

type ProductType = {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
    image: string;
};

const kategori = () => {
    const { data, error } = useSWR("/api/produk", fetcher);
    const products: ProductType[] | null = error ? [] : data?.data || null;

    return (
        <div>
            <TampilanProduk products={products} />
        </div>
    );
};

export default kategori;