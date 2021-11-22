import { useRouter } from 'next/router';
function ProductId() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>Product Details Page about {productId}</h1>
    </div>
  );
}

export default ProductId;
