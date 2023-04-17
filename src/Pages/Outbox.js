import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { Link } from "react-router-dom";

export default function Outbox() {
  const { sentMailList } = useContext(DataContext);
  const listItem =
    sentMailList &&
    sentMailList.map(({ id, subject }) => (
      <li key={id}>
        <Link to={`/outbox/${id}`}>{subject}</Link>
      </li>
    ));
  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  );
}
