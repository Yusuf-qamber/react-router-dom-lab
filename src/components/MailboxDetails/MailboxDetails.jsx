import { useParams } from "react-router";

const MailboxDetails = (props) => {
  // src/components/MailboxDetails/MailboxDetails.jsx
console.log(props)
const params=useParams()
   const { mailboxid } = useParams();
  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxid)
  );

  if (!selectedBox) {
    console.log("mailboxId from URL:", mailboxid);
console.log("mailboxes from props:", props.mailboxes);

  return <p>Mailbox not found.</p>;
}


  return (
    
    <>
    <h3>Mailbox Details </h3>
    
    <p>Boxholder: {selectedBox.boxholder}</p>
    <p>Box Size: {selectedBox.boxSize}</p>
    </>
  ) 
};

export default MailboxDetails;
