import { FaReact } from "react-icons/fa";
import { IconContext } from "react-icons";

function Skill() {
  return (
    <>
    <IconContext.Provider value={{ size:"5em" }}>
      <div className="w-28 h-32 flex flex-col justify-center items-center mx-auto">
        <div className="">
        <FaReact />
        </div>
        <div className="">
            <p>FaReact</p>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Skill;
