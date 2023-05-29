import { IconContext } from "react-icons";

function Skill({ icon, text }) {
  return (
    <>
      <IconContext.Provider value={{ size: "5em" }}>
        <div className="w-28 h-32 flex flex-col justify-center items-center mx-auto">
          <div className="">{icon}</div>
          <div className="">
            <p>{text}</p>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Skill;
