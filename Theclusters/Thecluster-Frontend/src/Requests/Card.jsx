import ".././Style/Card.css";

function Card(props) {
  const bal =
    "Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.";
  return (
    <>
      <div className="solution_cards_box my-5 col-xll-4 col-xl-4 col-md-6 col-sm-6 col-xs-12 col-12">
        <div className="solution_card py-5 my-0">
          <div className="hover_color_bubble"></div>
          <div className="solu_title row">
            <div className="col-md-6 text-start">
              <h1>Name Name</h1>
            </div>
            <div className="col-md-6 text-start">
              <h1>Cluster1</h1>
            </div>
          </div>
          <div className="solu_description">
            <p className="text-justify pb-4 pt-3">
              {(bal + bal + bal + bal + bal).substring(0, 400) + " ........."}
            </p>
            <button type="button" className=" ">
              Read More
            </button>
            <button type="button" className=" ms-5">
              Contact User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
