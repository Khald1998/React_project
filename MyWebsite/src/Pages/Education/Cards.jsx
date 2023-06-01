import KFUPM from '../../assets/KFUPM.png'
function Cards() {
  return (
    <>

      <div
        className="mb-16 max-w-sm border  border-gray-200 rounded-lg shadow bg-second flex flex-col justify-center items-center
          h-2/4 w-auto
          xxs:h-2/4 xxs:w-3/4
          text-whitey
          "
      >
        <div className=" rounded-lg flex justify-center items-center h-2/4 w-auto">
          <img
            className="rounded-lg h-3/4 w-auto bg-whitey"
            src={KFUPM}
            alt=""
          />
        </div>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-center
            xxs:text-lg
            xs:text-xl
            sm:text-2xl
            ">
              KFUPM
            </h5>
          </a>
          <p className="mb-3 font-normal  text-center
          xxs:text-sm
          xs:text-base
          sm:text-lg
          ">
            A student at King Fahd University of Petroleum and Minerals whose
            major is a Computer Engineer.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
