// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Card from "./Card";

// function Requests() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     http://localhost:8080/Data


//   }, []);
//   return (
//     <div className="container my-5">
//       <div className="row">
//         <h1 className="text-center">All the Requests</h1>
//       </div>
//       <Card
//         id={data.id}
//         name={data.name}
//         phone={data.phone}
//         cluster={data.cluster}
//         idea={data.idea}
//       />
//     </div>
//   );
// }

// export default Requests;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Requests() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8080/Data")
      .then(response => {
        setData(response.data);
        console.log(response.data[0].name);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <h1 className="text-center">All the Requests</h1>
      </div>
      <Card
        // id={data[0].id}
        name={data[0].name}
        phone={data[0].phone}
        cluster={data[0].cluster}
        idea={data[0].idea}
      />
    </div>
  );
}

export default Requests;
