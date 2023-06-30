function Warning() {
  return (
    <>
      <div
        className="bg-red-100 w-11/12 mx-auto text-red-700 p-4 rounded-3xl"
        role="alert"
      >
        <p className="font-bold">Error</p>
        <p>Invalid email or password.</p>
      </div>
    </>
  );
}

export default Warning;
