import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { useState } from "react";
import { Route, Routes } from "react-router";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const addBox = (newMailbox) => {
  newMailbox._id = mailboxes.length + 1;
  setMailboxes([...mailboxes, newMailbox]);
};

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Mailbox</h1>}></Route>
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm mailboxes={mailboxes} addMailbox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxid"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>PAGE NOT FOUND - 404</h2>} />
      </Routes>
    </>
  );
};

export default App;
