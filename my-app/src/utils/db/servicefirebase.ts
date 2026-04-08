import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string){
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    return data;
}

export async function addProduct(collectionName: string, productData: any) {
    try {
        const docRef = await addDoc(collection(db, collectionName), productData);
        return { id: docRef.id, ...productData };
    } catch (error) {
        console.error("Error adding product: ", error);
        throw error;
    }
}

export async function deleteProduct(collectionName: string, productId: string) {
    try {
        await deleteDoc(doc(db, collectionName, productId));
        return { success: true };
    } catch (error) {
        console.error("Error deleting product: ", error);
        throw error;
    }
}