import type { GetServerSideProps } from "next";
import TampilanProduk from "../../views/product";
import type { ProductType } from "../../types/Product.type";

type Props = {
    products: ProductType[];
};

const ProductsServer = ({ products }: Props) => {
    return (
        <div>
            <h1>Products (SSR)</h1>
            <TampilanProduk products={products} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await fetch("http://localhost:3000/api/produk");
    const response = await res.json();

    return {
        props: {
            products: response?.data ?? [],
        },
    };
};

export default ProductsServer;
