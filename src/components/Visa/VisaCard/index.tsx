import { FaCcVisa } from "react-icons/fa";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { getDataFromStorage, deleteVisa } from "../../../utils/customFunctions";

interface VisaProps {
  addVisa: string | number | undefined | any;
  setVisa: string | number | undefined | any;
}

export const VisaCard = ({ addVisa, setVisa }: VisaProps) => {
  const { id, name, number, expirationYear, expirationMonth, security } =
    addVisa;
  const navigate = useNavigate();
  const removeVisa = () => {
    deleteVisa(id);
    setVisa(getDataFromStorage());
  };
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
            <button
              className="btn-edit-delete"
              onClick={() => navigate(`/payment/${id}`)}
            >
              edit
            </button>{" "}
            -{" "}
            <button className="btn-edit-delete" onClick={() => removeVisa()}>
              delete
            </button>
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
