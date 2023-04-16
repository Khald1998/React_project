import ".././Style/CardRequest.css";
function CardRequest() {
  return (
    <>
        <div className="solution_cards_box ">
          <div className="solution_card">
            <div className="hover_color_bubble"></div>

            <div className="solu_title">
              <h3>Demo 1</h3>
            </div>
            <div className="solu_description">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="solu_description ">
              <button type="button" className=" ">
                Read More
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default CardRequest;
// https://codepen.io/kalpeshpurohit/pen/ZEWVrKj
