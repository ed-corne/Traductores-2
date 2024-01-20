import React, { useState } from "react";
import "../styles/form.css";

const RegexForm = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#]+\.[^\s/?#]+(\/[^\s/?#]+)*$/;
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  const ipv4Regex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.([25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.([25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.([25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [ipv4, setIPv4] = useState("");
  const [errors, setErrors] = useState(true);
  const [errors1, setErrors1] = useState(true);
  const [errors2, setErrors2] = useState(true);
  const [errors3, setErrors3] = useState(true);
  const [errors4, setErrors4] = useState(true);

  const handleInputs = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setErrors(emailRegex.test(value));
        break;
      case "url":
        setErrors2(urlRegex.test(value));
        break;
      case "date":
        setErrors3(dateRegex.test(value));
        break;
      case "phone":
        setErrors1(phoneRegex.test(value));
        break;
      case "ipv4":
        setErrors4(ipv4Regex.test(value));
        break;
    }
  };

  return (
    <div className="card-regex">
      <h1 className="card-regex__title">Regular Expressions</h1>
      <form className="form-regex">
        <label className="form-regex__label">Email</label>
        <input
          type="text"
          className="form-regex__input"
          name="email"
          onChange={handleInputs}
        />
        {!errors ? <span className="form-regex__invalid">invalid</span> : null}

        <label className="form-regex__label">
          PHONE NUMBER (INTERNATIONAL)
        </label>
        <input
          type="text"
          className="form-regex__input"
          name="phone"
          onChange={handleInputs}
        />
        {!errors1 ? <span  className="form-regex__invalid">invalid</span> : null}

        <label className="form-regex__label">URL</label>
        <input
          type="text"
          className="form-regex__input"
          name="url"
          onChange={handleInputs}
        />
        {!errors2 ? <span  className="form-regex__invalid">invalid</span> : null}

        <label className="form-regex__label">DATE (dd/mm/yyyy)</label>
        <input
          type="text"
          className="form-regex__input"
          name="date"
          onChange={handleInputs}
        />
        {!errors3 ? <span  className="form-regex__invalid">invalid</span> : null}

        <label className="form-regex__label">ipv4</label>
        <input
          type="text"
          className="form-regex__input"
          name="ipv4"
          onChange={handleInputs}
        />
        {!errors4 ? <span  className="form-regex__invalid">invalid</span> : null}
      </form>
    </div>
  );
};

export default RegexForm;
