import CardRequest from "./CardRequest";

function Requests() {
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">All the Requests</h1>
      </div>
      <CardRequest />
      <CardRequest />
      <CardRequest /><CardRequest /><CardRequest /><CardRequest /><CardRequest />


    </div>
  );
}

export default Requests;
