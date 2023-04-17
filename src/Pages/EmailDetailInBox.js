import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";

export default function EmailDetailInBox() {
  const { msgId } = useParams();
  const { recivedMailList } = useContext(DataContext);

  const FindEmail = () => {
    const output = recivedMailList.find((mail) => mail.id === Number(msgId));
    console.log(recivedMailList, msgId);
    return (
      <div>
        <h2>{output?.sender}</h2>
        <p>From:{output?.sender}</p>
        <p>Message:{output?.message}</p>
      </div>
    );
  };

  //Doubt 1
  //1 approach indivisula make Detail Page
  //2nd Approach indivisual find indiviually sent and recived mail when we find
  // that just display that type of component.
  // const recivedFindEmail=recivedMailList&&recivedMailList.find((mail))
  // const findEmail=[...sentMailList,...recivedMailList].map()

  //Doubt 2
  //is it Good to nested the Component in That way

  return <div>{recivedMailList && <FindEmail />}</div>;
}
