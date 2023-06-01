import { useEffect } from "react";
import { addVisaData } from "../../utils/customFunctions";
import { useForm } from "../../hooks/useForm";
import "./style.scss";

export const FormVisa = () => {
  const { inputValues, resetForm, handleInputChange, setForm } = useForm({
    name: "",
    number: "",
    expirationMonth: "",
    expirationYear: "",
    security: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    addVisaData(inputValues);
    resetForm();
  };
  return (
    <form className="form-visa" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={inputValues.name}
        onChange={handleInputChange}
      />
      <label htmlFor="name">Number</label>
      <input
        type="number"
        name="number"
        value={inputValues.number}
        onChange={handleInputChange}
      />
      <label htmlFor="expirationYear">Expiration Year</label>
      <input
        type="number"
        min="1900"
        max="2099"
        step="1"
        name="expirationYear"
        value={inputValues.expirationYear}
        onChange={handleInputChange}
      />
      <label htmlFor="expirationMonth">Expiration Month</label>
      <input
        type="number"
        min="1"
        max="12"
        name="expirationMonth"
        value={inputValues.expirationMonth}
        onChange={handleInputChange}
      />
      <label htmlFor="security">Security Code</label>
      <input
        type="number"
        max="3"
        name="security"
        value={inputValues.security}
        onChange={handleInputChange}
      />
      <button type="submit">Save</button>
    </form>
  );
};
