import { useState, useEffect } from 'react';
import TampilanProduk from '../views/product';
import { ProductType } from '../types/Product.type';

const TestPage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        size: '',
        category: '',
        image: ''
    });
    const [beforeState, setBeforeState] = useState<ProductType[]>([]);
    const [afterState, setAfterState] = useState<ProductType[]>([]);
    const [showCompare, setShowCompare] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
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

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        setBeforeState([...products]);
        try {
            const res = await fetch('/api/produk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const response = await res.json();
            if (response.status) {
                await fetchProducts();
                setAfterState([...products, response.data]);
                setFormData({ name: '', price: '', size: '', category: '', image: '' });
            } else {
                alert('Error adding product: ' + response.message);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDeleteProduct = async (id: string) => {
        setBeforeState([...products]);
        try {
            const res = await fetch('/api/produk', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            const response = await res.json();
            if (response.status) {
                await fetchProducts();
                setAfterState(products.filter(p => p.id !== id));
            } else {
                alert('Error deleting product: ' + response.message);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleCompare = () => {
        setShowCompare(true);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Halaman Testing CRUD Produk</h1>

            <div style={{ marginBottom: '30px' }}>
                <h2>Tambah Produk</h2>
                <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
                    <input type="text" name="name" placeholder="Nama Produk" value={formData.name} onChange={handleInputChange} required />
                    <input type="number" name="price" placeholder="Harga" value={formData.price} onChange={handleInputChange} required />
                    <input type="text" name="size" placeholder="Ukuran" value={formData.size} onChange={handleInputChange} required />
                    <input type="text" name="category" placeholder="Kategori" value={formData.category} onChange={handleInputChange} required />
                    <input type="text" name="image" placeholder="URL Gambar" value={formData.image} onChange={handleInputChange} />
                    <button type="submit" disabled={loading}>Tambah Produk</button>
                </form>
            </div>

            <div style={{ marginBottom: '30px' }}>
                <h2>Daftar Produk</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {products.map(product => (
                            <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h3>{product.name}</h3>
                                    <p>Rp {product.price}</p>
                                    <p>Ukuran: {product.size}</p>
                                    <p>Kategori: {product.category}</p>
                                </div>
                                <button onClick={() => handleDeleteProduct(product.id)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px' }}>Hapus</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div style={{ marginBottom: '30px' }}>
                <button onClick={handleCompare} style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none' }}>Bandingkan Hasil</button>
            </div>

            {showCompare && (
                <div>
                    <h2>Perbandingan</h2>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div>
                            <h3>Sebelum Operasi</h3>
                            <TampilanProduk products={beforeState} />
                        </div>
                        <div>
                            <h3>Sesudah Operasi</h3>
                            <TampilanProduk products={afterState} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestPage;