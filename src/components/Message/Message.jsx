import { useParams } from "react-router-dom";

const Message = (props) => {
  const { id } = useParams();

  return (
    <div>
      {props.message}{" "}
      {props.users.find((val) => val.id === id)?.name || "No name"}
    </div>
  );
};

export default Message;
