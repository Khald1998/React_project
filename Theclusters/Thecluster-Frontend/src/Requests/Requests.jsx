import Card from "./Card";

function Requests() {
  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">All the Requests</h1>
      </div>
      <Card
        id={69}
        Name="Khaled alzahrani"
        Phone="69"
        Idea="flkhdfhdhflkhdfhdhflkhdfhdhflkhdfhdh"
        Cluster="Cluster 1"
      />
    </div>
  );
}

export default Requests;
