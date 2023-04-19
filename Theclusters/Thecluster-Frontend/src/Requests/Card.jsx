import { useState, useEffect } from "react";
import ButtonS from "./ButtonS";
import Watch from "./Watch";
import TL from "./Text-limit";
import "./Card.css";

function Card(props) {
  const urlW = "https://api.whatsapp.com/send?phone="+props.phone
  const urlR = "http://localhost:3000/Requests/"+props._id
  const handleClick = (props) => {
    
    (props.target.value === "Contact")?(window.location.href = urlW):(window.location.href = urlR)

    

  };
  const min = 2*24*60;
  const [remainingTime, setRemainingTime] = useState(
    Math.max(
      0,
      Math.floor(
        (Date.parse(props.createdAt) + min * 60 * 1000 - Date.now()) / 1000
      )
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) =>
        Math.max(0, prevRemainingTime - 1)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  const timeColor = remainingTime < 3600 ? "red" : "inherit";

  return (
    <>
      <div className=" solution_cards_box my-4 col-xl-4 col-md-6 col-sm-6 col-xs-12 col-12">
        <div className=" solution_card py-5 my-0">
          <div className=" hover_color_bubble"></div>
          <div className=" solu_title row">
            <div className=" col-9 text-start">
              <TL className="h4" text={props.name} limit={15} />
            </div>
            <div className=" col-3 text-end">
              <p className="h5">{`Cluster:${props.cluster}`}</p>
            </div>
          </div>
          <div className=" solu_description">
            <TL
              className="min-h text-justify pb-2 pt-2"
              text={props.idea}
              limit={400}
            />

            <ButtonS value="Read" text="Read More" onClick={handleClick}/>
            <Watch timeColor={timeColor} timeString={timeString} />
            <ButtonS value="Contact" text="Contact User" onClick={handleClick}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
