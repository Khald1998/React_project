import ".././Style/CardRequest.css";
function CardRequest(props) {
  return (
    <>
        <div className="solution_cards_box ">
          <div className="solution_card">
            <div className="hover_color_bubble"></div>

            <div className="solu_title">
              <h1>{props.Name}</h1>
              <h5>{props.Cluster}</h5>
            </div>
            <div className="solu_description mb-5">
              <p>{props.Idea}</p>
            </div>
            <div className="solu_description mt-5">
              <button type="button" className=" ">
                Read More
              </button>
              <button type="button" className="ms-sm-5 ms-2 " value={props.Phone}>
                Contact the student
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default CardRequest;
// https://codepen.io/kalpeshpurohit/pen/ZEWVrKj
