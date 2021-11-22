import Link from 'next/link';
function index() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/products'>
        <a>Go to Products Page</a>
      </Link>
    </div>
  );
}

export default index;
