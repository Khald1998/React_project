import { IconContext } from "react-icons";

function Skill({ icon, text }) {
  return (
    <>
      <IconContext.Provider value={{ size: "5em" }}>
        <div className="w-28 h-32 flex flex-col justify-center items-center mx-auto hover:text-tertiary transition-all duration-300">
          <div className="">{icon}</div>
          <div className="mt-4">
            <p>{text}</p>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Skill;
