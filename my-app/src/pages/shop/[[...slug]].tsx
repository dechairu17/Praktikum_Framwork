import {useRouter} from 'next/router';

const halamanToko = () => {
    const router = useRouter();
    //console.log(router);
    const {query} = router;
    // slug may be undefined or an array of strings when using catch-all routes
    const slug = query.slug as string[] | undefined;

    return (
        <div>
            <h1>Halaman Toko</h1>
            <p>
                Kategori: {slug && slug.length > 0 ? slug[0] : "Semua Kategori"}
            </p>
            {slug && slug.length > 1 && (
                <p>Subslug: {slug[1]}</p>
            )}
        </div>
    );
}

export default halamanToko;