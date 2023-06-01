import { useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import "./style.scss";

export const VisaCard = ({ addVisa }) => {
  const { name, number, expirationYear, expirationMonth, security } = addVisa;
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="visa-component">
        <div className="visa-card">
          <input type="radio" defaultChecked={security} />
          <FaCcVisa size="2em" />
          <p>Visa | {number}</p>
        </div>
        <div className="visa-content">
          <p>
            {name} | {expirationYear}/{expirationMonth}
          </p>
          <p>
            <button className="btn-edit-delete" onClick={() => setEdit(!edit)}>
              edit
            </button>{" "}
            - <a href="">delete</a>
          </p>
          <p>Security Code</p>
          <input
            className="visa-input"
            type="password"
            defaultValue={security}
            pattern="[0-9]{10}"
            min={1}
            max={3}
            name="visa"
          />
        </div>
      </div>
    </>
  );
};
