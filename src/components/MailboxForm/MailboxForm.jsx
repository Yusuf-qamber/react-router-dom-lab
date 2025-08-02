import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
  boxholder: "",
  boxSize: "small",
};
const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate("/mailboxes");
  };

  return (
    <>
      <h1>Fill Out the form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          placeholder="Boxholder Name"
          value={formData.boxholder}
          onChange={handleChange}
        />
       

        <label htmlFor="boxSize"> Select a Box Size:</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
