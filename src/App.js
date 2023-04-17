import Header from "./Pages/Header";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Inbox from "./Pages/Inbox";
import Outbox from "./Pages/Outbox";
import EmailDetailInBox from "./Pages/EmailDetailInBox";
import EmailDetailOutBox from "./Pages/EmailDetailOutBox";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/inbox" element={<Inbox />}></Route>
        <Route path="/outbox" element={<Outbox />}></Route>
        <Route path="/inbox/:msgId" element={<EmailDetailInBox />}></Route>
        <Route path="/outbox/:msgId" element={<EmailDetailOutBox />}></Route>
      </Routes>
    </div>
  );
}
