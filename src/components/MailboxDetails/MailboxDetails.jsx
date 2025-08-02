import { useParams } from "react-router";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  console.log("mailboxId param:", mailboxId);
  console.log("mailboxes prop:", props.mailboxes);
  console.log("letters prop:", props.letters);

  const selectedBox = props.mailboxes.find(
    (mailbox) => String(mailbox._id) === mailboxId
  );

  if (!selectedBox) {
    return <p>Mailbox not found.</p>;
  }


  const selectedLetters = props.letters.filter(
    (letter) => String(letter.mailboxId) === mailboxId
  );

  return (
    <>
      <h3>Mailbox Details</h3>
      <p>Mailbox number {selectedBox._id}</p>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>

      <h4>Letters:</h4>
      {selectedLetters.length === 0 ? (
        <p>No letters yet.</p>
      ) : (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <strong>To:</strong> {letter.recipient} <br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MailboxDetails;
