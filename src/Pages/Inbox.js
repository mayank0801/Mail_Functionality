import { useContext } from "react";
import { DataContext } from "../context/dataContext";
import { Link } from "react-router-dom";

export default function Inbox() {
  const { recivedMailList, readMailHandler } = useContext(DataContext);

  //EMail List To Display
  const listItem =
    recivedMailList &&
    recivedMailList.map(({ id, subject, read }) => (
      <li key={id}>
        <Link to={`/inbox/${id}`}>{subject}</Link>
        {!read && (
          <button onClick={() => readMailHandler(id)}>Mark As Read</button>
        )}
      </li>
    ));

  //Count Total Read Mail And Unread Mail
  const CountMail = () => {
    const { readMail, unreadMail } = recivedMailList.reduce(
      (acc, { read }) => {
        if (read) return { ...acc, readMail: acc.readMail + 1 };
        else return { ...acc, unreadMail: acc.unreadMail + 1 };
      },
      { readMail: 0, unreadMail: 0 }
    );
    return (
      <>
        <h3>ReadMail:{readMail}</h3>
        <h3>UnreadMail:{unreadMail}</h3>
      </>
    );
  };

  return (
    <div>
      {recivedMailList && <CountMail />}
      <ul>{listItem}</ul>
    </div>
  );
}
