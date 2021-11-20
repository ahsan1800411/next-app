import { useRouter } from 'next/router';
function productId() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>Product Details Page about {productId}</h1>
    </div>
  );
}

export default productId;
