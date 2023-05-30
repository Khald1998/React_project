function main() {
  return (
    <>
      <div className="bg-second h-screen w-full flex justify-center items-center">
        <div className="max-w-sm border border-gray-200 rounded-lg shadow bg-second flex flex-col justify-center items-center">
          <div className="bg-whitey h-3/4 w-3/4 rounded flex justify-center items-center py-5 my-5">
            <img className="rounded-t-lg w-3/4 h-3/4" src="src\assets\KFUPM.png" alt="" />
          </div>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              KFUPM
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
            A student at King Fahd University of Petroleum and Minerals whose major is a Computer Engineer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default main;
