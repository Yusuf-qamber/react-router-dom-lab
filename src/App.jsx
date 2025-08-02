import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import { useState } from "react";
import { Route, Routes } from "react-router";
import LetterForm from "./components/LetterForm/LetterForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);
  const addLetter = (letter) => {
    letter._id = letters.length + 1;
    setLetters([...letters, letter]);
  };
  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Post Office</h1>}></Route>
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route
          path="/new-mailbox"
          element={<MailboxForm mailboxes={mailboxes} addMailbox={addBox} />}
        />
      <Route
  path="/mailboxes/:mailboxId"
  element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
/>


        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />

        <Route path="*" element={<h2>PAGE NOT FOUND - 404</h2>} />
      </Routes>
    </>
  );
};

export default App;
