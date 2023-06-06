import { FiGithub } from "react-icons/fi";

function Description() {
    return (
      <>
              <div className="text-whitey  flex   
              xxs:h-5/6 xxs:w-full xxs:items-start
              xs:justify-center
              min-[480px]:w-[85%] min-[480px]:mx-auto
              sm:w-full
              md:w-3/4 md:mr-0 md:items-center md:justify-end
              lg:h-3/4 
              xl:h-5/6 
              " >
                <div className=" rounded-md flex flex-col justify-center items-center  
                xxs:h-fit xxs:w-full 
                xs:h-[75%] xs:w-full
                min-[480px]:h-[85%]
                min-[480px]:w-full
                sm:h-[70%]
                md:z-10 md:h-5/6 md:w-[82%]
                lg:w-[90%]
                xl:w-4/6 xl:h-[65%]
                box-shadow-smoth
                
                ">
                <div className=" mx-auto
                xxs:w-11/12 xxs:h-[8%] 
                min-[480px]:w-10/12 min-[480px]:h-[7%]
                md:h-[10%] md:w-7/12 md:mr-0
                lg:w-10/12 lg:mr-0
                xl:w-3/4 xl:mr-0
                bg-red-500
                ">
                  <h1>Featured Project</h1>
                </div>
                <div className=" mx-auto 
                xxs:w-11/12 xxs:h-[9%] 
                min-[480px]:w-10/12 min-[480px]:h-[8%]
                md:h-[12%] md:w-7/12 md:mr-0
                lg:w-10/12 lg:mr-0
                xl:w-3/4 xl:mr-0
                bg-orange-500
                ">
                  <a href="">Spotify Profile</a>
                </div>
                <div className="bg-footer mx-auto
                xxs:w-11/12 xxs:min-h-[51%] xxs:p-5 
                min-[480px]:w-10/12 min-[480px]:h-[50%]
                md:h-[35%] md:rounded-md md:mt-2 md:mr-0 md:w-11/12
                min-[850px]:w-11/12 min-[850px]:mr-0
                lg:w-full lg:mt-3
                xl:w-full xl:h-[39%] xl:mt-0
                ">
                  <h1>A minimal,  Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm. A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</h1>
                </div>
                <div className=" mx-auto
                xxs:w-11/12 xxs:min-h-[12%]
                min-[480px]:w-10/12 min-[480px]:h-[11%]
                md:h-[12%] md:w-11/12 md:mr-0
                lg:w-full lg:mr-0
                xl:w-full xl:mr-0
                bg-neutral-700
                ">
                  <ul className="list-none flex flex-row justify-evenly flex-wrap">
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item </p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                    <li className="mx-1"><p>item</p></li>
                  </ul>

                </div>
                <div className=" mx-auto flex flex-row justify-start items-center
                xxs:w-11/12 xxs:h-[10%]
                min-[480px]:w-10/12 min-[480px]:h-[9%]
                md:h-[12%] md:w-11/12 md:mr-0
                lg:w-full lg:mr-0
                xl:w-full xl:mr-0
                bg-blue-500
                ">
                  <FiGithub className="w-auto h-5 m-2" />
                </div>

                </div>
                
              </div>
      </>
    );
  }
  
  export default Description;
