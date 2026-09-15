import { useState } from "react";
import bg from "../../assets/images/inquire-bg.jpg";
import "./InquireForm.css";

const FIELDS = [
  "Full Name",
  "Email",
  "Mobile Number",
  "Grade",
  "Child's Year Of Birth",
  "Message",
];

function InquireForm() {
  const [values, setValues] = useState({});

  const handleChange = (field) => (e) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="inquire-form" style={{ backgroundImage: `url(${bg})` }}>
      <div className="section-eyebrow">
        <h2>Inquire Today</h2>
        <p>Contact Us for More Information</p>
      </div>

      <form className="inquire-form__panel" onSubmit={handleSubmit}>
        {FIELDS.map((field) => (
          <label className="inquire-form__field" key={field}>
            <span>{field}</span>
            <input
              type="text"
              value={values[field] || ""}
              onChange={handleChange(field)}
            />
          </label>
        ))}

        <button type="submit" className="btn-outline">
          Submit
        </button>
      </form>
    </section>
  );
}

export default InquireForm;
