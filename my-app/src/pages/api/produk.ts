import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveProducts, addProduct, deleteProduct } from "../../utils/db/servicefirebase";

type Data = {
    status: boolean;
    status_code: number;
    data: any;
    message?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'GET') {
        try {
            const data = await retrieveProducts("products");
            res.status(200).json({ status: true, status_code: 200, data });
        } catch (error) {
            res.status(500).json({ status: false, status_code: 500, data: null, message: "Error retrieving products" });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, price, size, category, image } = req.body;
            if (!name || !price || !size || !category) {
                return res.status(400).json({ status: false, status_code: 400, data: null, message: "Missing required fields" });
            }
            const newProduct = await addProduct("products", { name, price, size, category, image });
            res.status(201).json({ status: true, status_code: 201, data: newProduct, message: "Product added successfully" });
        } catch (error) {
            res.status(500).json({ status: false, status_code: 500, data: null, message: "Error adding product" });
        }
    } else if (req.method === 'DELETE') {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ status: false, status_code: 400, data: null, message: "Product ID is required" });
            }
            await deleteProduct("products", id);
            res.status(200).json({ status: true, status_code: 200, data: null, message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).json({ status: false, status_code: 500, data: null, message: "Error deleting product" });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
        res.status(405).json({ status: false, status_code: 405, data: null, message: `Method ${req.method} not allowed` });
    }
}

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) 
//     {
//         const data =
//         [
//             {
//                 id: "1",
//                 nama: "Kaos polos",
//                 harga: 100000,
//                 ukuran: "L",
//                 warna: "Hitam",
//             },
//             {
//                 id: "2",
//                 nama: "kaos lengan panjang",
//                 harga: 300000,
//                 ukuran: "XL",
//                 warna: "Merah",
//             },
//             {
//                 id: "3",
//                 nama: "Sepatu",
//                 harga: 250000,
//                 ukuran: "43",
//                 warna: "Hitam",
//             },            
//         ];
//         res.status(200).json({status: true,status_code: 200,data:data });
//     }
            