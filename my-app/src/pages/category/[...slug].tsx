import { useRouter } from 'next/router';

const CategoryCatchAll = () => {
    const router = useRouter();
    const slugParam = router.query.slug;
    const slug = Array.isArray(slugParam) ? slugParam : slugParam ? [slugParam] : [];

return (
  <div>
    <h1>Kategori Catch-All Route</h1>
    <h2>URL Parameters:</h2>
    {slug.length > 0 ? (
      <div>
        <p><strong>Total Parameter:</strong> {slug.length}</p>
        <h3>Parameter List:</h3>
        <ul>
          {slug.map((param, index) => (
            <li key={index}>
              Parameter {index + 1}: <strong>{param}</strong>
            </li>
          ))}
        </ul>
        <p><strong>Full URL Path:</strong> /category/{slug.join('/')}</p>
      </div>
    ) : (
      <p>Tidak ada parameter di URL</p>
    )}
  </div>
);
};

export default CategoryCatchAll;
