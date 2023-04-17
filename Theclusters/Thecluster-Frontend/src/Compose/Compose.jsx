import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";
import Alart from "./Alart";

function Compose() {
  return (
    <>
      <Alart />
      <form action="http://localhost:8080/DataAdd" method="post">
        <div className="container my-5">
          <Input placeholder="Your Name" name="name" />
          <Input placeholder="Your Phone" name="phone" />
          <Select />
          <TextArea placeholder="Your Idea" row={4} col={40} name="idea" />
          <Button />
        </div>
      </form>
    </>
  );
}

export default Compose;
