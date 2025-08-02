
import { useState } from "react";
import { useNavigate } from "react-router"; 

const LetterForm = (props) => {
  const [formData, setFormData] = useState({
    mailboxId: "",
    recipient: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const letter = { ...formData, mailboxId: Number(formData.mailboxId) };

    props.addLetter(letter);

   
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select a mailbox:</label>
        <select
          name="mailboxId"
          id="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Mailbox --</option>
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id} - {mailbox.boxholder}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          placeholder="Recipient name"
          value={formData.recipient}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LetterForm;
