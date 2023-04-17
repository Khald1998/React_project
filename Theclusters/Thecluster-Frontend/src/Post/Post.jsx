import { useState, useEffect } from "react";
import ".././Style/Card.css";

import { useParams } from "react-router-dom";
import Alart from "../Compose/Alart";
import ButtonS from "../Requests/ButtonS";
import Watch from "../Requests/Watch";
import axios from "axios";

function Post() {
  const { _id } = useParams();
  const [data, setData] = useState([]);
  const urlW = "https://api.whatsapp.com/send?phone=" + data.phone;
  const handleClick = () => {window.location.href = urlW;};


  useEffect(() => {
    axios
      .get(`http://localhost:8080/Find/${_id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <>
      <Alart />
      <div className=" solution_cards_box m-5 ">
        <div className="vh-100 solution_card  m-5 ">
          <div className=" solu_title row">
            <div className=" col-10 text-start">
              <p className="h1">{data.name}</p>
            </div>
            <div className=" col-2 text-end">
              <p className="h2">{`Cluster:${data.cluster}`}</p>
            </div>
          </div>
          <div className=" solu_description">
            <p className="min-h text-justify pb-2 pt-2">{data.idea}</p>
            {/* <Watch timeColor={"red"} timeString={timeString} /> */}
            <ButtonS
              value="Contact"
              text="Contact User"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
