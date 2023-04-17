import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1>My Mail Box</h1>
      <NavLink to="/inbox">Inbox</NavLink> ||{" "}
      <NavLink to="/outbox">Sent</NavLink>
    </div>
  );
}
