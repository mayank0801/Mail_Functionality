import { useEffect, useState } from "react";
import { createContext } from "react";
import { fakeFetch } from "../api/fakeFetch";

export const DataContext = createContext({ mailList: [] });

export default function DataProvider({ children }) {
  const [sentMailList, setSentMailList] = useState(null);
  const [recivedMailList, setRecivedMailList] = useState(null);
  const getMailData = async () => {
    try {
      const {
        status,
        data: { emails, sentEmails }
      } = await fakeFetch("https://example.com/api/allemails");
      setSentMailList(sentEmails);
      setRecivedMailList(emails);
    } catch (e) {}
  };
  useEffect(() => {
    getMailData();
  }, []);

  function readMailHandler(idRead) {
    setRecivedMailList(
      recivedMailList.map((mail) => ({
        ...mail,
        read: mail.id === idRead ? !mail.read : mail.read
      }))
    );
  }

  return (
    <div>
      <DataContext.Provider
        value={{ sentMailList, recivedMailList, readMailHandler }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
}
