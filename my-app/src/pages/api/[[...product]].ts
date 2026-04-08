import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveDataByID, retrieveProducts } from "../../utils/db/servicefirebase";

type Data = {
    status: boolean;
    status_code: number;
    data: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.query.produk?.[1]) {
        const data = await retrieveDataByID("products", req.query.produk[1] as string);
        res.status(200).json({ status: true, status_code: 200, data });
        return;
    }

    const data = await retrieveProducts("products");
    res.status(200).json({ status: true, status_code: 200, data });
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
            