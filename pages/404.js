import Link from 'next/link';
function ErrorPage() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link href='/'>
        <a>Go to Homepage</a>
      </Link>
    </div>
  );
}

export default ErrorPage;
