import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";
export default function EmailDetailOutBox() {
  const { msgId } = useParams();
  const { sentMailList } = useContext(DataContext);

  const findEmail =
    sentMailList && sentMailList.find((mail) => mail.id === Number(msgId));
  return (
    <div>
      {findEmail && (
        <>
          <h2>{findEmail?.subject}</h2>
          <p>To:{findEmail?.to}</p>
          <p>Message:{findEmail.message}</p>
        </>
      )}
    </div>
  );
}
