import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/Product.type";

const halamanProdukStatic = (props:{products: ProductType[]}) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />
        </div>
    )
}

export default halamanProdukStatic;

export async function getStaticProps() {
    // Untuk SSG, gunakan data statis atau mock data karena tidak bisa fetch ke localhost saat build
    const mockProducts: ProductType[] = [
        {
            id: "1",
            name: "Kaos polos",
            price: 100000,
            size: "L",
            category: "Pakaian",
            image: "/images/kaos.jpg"
        },
        {
            id: "2",
            name: "Kaos lengan panjang",
            price: 150000,
            size: "XL",
            category: "Pakaian",
            image: "/images/kaos-panjang.jpg"
        }
    ];

    return {
        props: {
            products: mockProducts,
        },
        revalidate: 60, // Re-generate setiap 60 detik
    };
}