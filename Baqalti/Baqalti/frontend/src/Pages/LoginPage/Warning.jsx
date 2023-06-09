function Warning() {
  return (
    <>
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>Invalid email or password.</p>
      </div>
    </>
  );
}

export default Warning;
