import styles from "../../pages/produk/product.module.scss";

type ProductType = {
    id: string;
    name: string;
    price: number | string;
    size: string;
    category: string;
    image: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] | null }) => {
    const skeletonItems = Array.from({ length: 4 }, (_, idx) => idx);

    return (
        <div className={styles.produk}>
            <h1 className={styles.produk_title}>Daftar Produk</h1>
            <div className={styles.produk_content}>
                {products === null ? (
                    <div className={styles.produk_content_skeletonGrid}>
                        {skeletonItems.map((item) => (
                            <div key={item} className={styles.produk_content_skeleton}>
                                <div className={styles.produk_content_skeleton_image}></div>
                                <div className={styles.produk_content_skeleton_name}></div>
                                <div className={styles.produk_content_skeleton_price}></div>
                                <div className={styles.produk_content_skeleton_size}></div>
                                <div className={styles.produk_content_skeleton_category}></div>
                            </div>
                        ))}
                    </div>
                ) : products.length > 0 ? (
                    products.map((product: ProductType) => {
                        const price = Number(product.price ?? 0);
                        const formattedPrice = new Intl.NumberFormat("id-ID").format(price);

                        return (
                            <div key={product.id} className={styles.produk_content_item}>
                                <div className={styles.produk_content_item_image}>
                                    <img src={product.image} alt={product.name} width={200} />
                                </div>
                                <h4 className={styles.produk_content_item_name}>
                                    {product.name}
                                </h4>
                                <p className={styles.produk_content_item_price}>
                                    Rp {formattedPrice}
                                </p>
                                <p className={styles.produk_content_item_size}>
                                    Ukuran: {product.size}
                                </p>
                                <p className={styles.produk_content_item_category}>
                                    Kategori: {product.category}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p className={styles.produk_empty}>Tidak ada produk tersedia.</p>
                )}
            </div>
        </div>
    );
};

export default TampilanProduk;