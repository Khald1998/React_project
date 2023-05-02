import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Alart from "./Alart";
import Button from "./Button";
import axios from "axios";
import PostCSS from"../Style/Post.module.css";

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
      <div className={PostCSS.solution_cards_box +" m-lg-5 m-md-5  "}>
        <div className={PostCSS.solution_card+" m-lg-5 m-md-5 "}>
          <div className={PostCSS.solu_title+" row mt-5"}>
            <div className=" col-lg-10 col-md-9 col-sm-12 col-xs-12 text-start">
              <p className="h1">{data.name}</p>
            </div>
            <div className=" col-lg-2 col-md-3 col-sm-12 col-xs-12 text-lg-end text-md-end text-sm-start text-xs-start">
              <p className="h2">{`Cluster: ${data.cluster}`}</p>
            </div>
            <p className="h2">{`Phone: ${data.phone}`}</p>
          </div>
          <div className={PostCSS.solu_description}>
            <p className={PostCSS.min_h+" "+PostCSS.ppp+" lead text-justify mx-lg-5 mx-md-5 mx-sm-0 mx-xs-0 my-sm-4 my-xs-4  pb-2 pt-lg-2 pt-md-2 pt-sm-2 pt-xm-2"}>{data.idea}</p>
            {/* <Watch timeColor={timeColor} timeString={timeString} /> */}
            <Button
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
