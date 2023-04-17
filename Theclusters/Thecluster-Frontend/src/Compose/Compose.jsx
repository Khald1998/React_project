import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./Button";

function Compose() {
  return (
    <form action="http://localhost:8080/data" method="post">
      <div className="container my-5">
        <Input placeholder="Your Name" name="user_name"/>
        <Input placeholder="Your Phone" name="user_phone"/>
        <Select />
        <TextArea placeholder="Your Idea" row={4} col={40} name="your_idea"/>
        <Button />
      </div>
    </form>
  );
}

export default Compose;
