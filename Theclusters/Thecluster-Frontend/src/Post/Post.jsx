import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Alart from "../Compose/Alart";
import Button from "./Button";
import Watch from "../Requests/Watch";
import axios from "axios";
import "./Post.css";

function Post() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const urlW = "https://api.whatsapp.com/send?phone=" + data.phone;
  const handleClick = () => {
    window.location.href = urlW;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/Find/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Alart text="Requeses will be deleted after 2 days." className="mt-5" />
      <div className=" solution_cards_box m-lg-5 m-md-5  ">
        <div className="vh-100 solution_card  m-lg-5 m-md-5 ">
          <div className=" solu_title row mt-5">
            <div className=" col-lg-10 col-md-10 col-sm-12 col-xs-12 text-start">
              <p className="h1">{data.name}</p>
            </div>
            <div className=" col-lg-2 col-md-2 col-sm-12 col-xs-12 text-lg-end text-md-end text-sm-start text-xs-start">
              <p className="h2">{`Cluster: ${data.cluster}`}</p>
            </div>
            <p className="h2">{`Phone: ${data.phone}`}</p>
          </div>
          <div className=" solu_description">
            <p className="min-h text-justify m-5  pb-2 pt-2">{data.idea}</p>
            {/* <Watch timeColor={"red"} timeString={timeString} /> */}
            {/* <Button
              value="Contact"
              text="Contact User"
              onClick={handleClick}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
