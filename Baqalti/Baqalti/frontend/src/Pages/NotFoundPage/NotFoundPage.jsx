
function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page not found</h2>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist or has been moved.</p>
        <a href="/" className="text-indigo-600 hover:text-indigo-700 mt-4 block">Go back to homepage</a>
      </div>
    </div>
  );
}

export default NotFoundPage;
