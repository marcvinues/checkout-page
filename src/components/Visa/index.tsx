import { useEffect, useState } from "react";
import { BsCreditCard2Back, BsPlusLg } from "react-icons/bs";
import { getDataFromStorage } from "../../utils/customFunctions";
import { VisaCard } from "./VisaCard";
import { FormVisa } from "../FormVisa";
import "./style.scss";

export const VisaComponent = () => {
  const [addVisa, setAddVisa] = useState({});
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState([{ form: "" }]);

  useEffect(() => {
    setAddVisa(getDataFromStorage);
  }, []);

  const handleAddCard = () => {
    // const a = [...addVisa, { name: "" }];
    console.log("entra");

    setAdd([...add, { form: "" }]);
  };

  console.log("getLocalData] =>", addVisa);
  return (
    <>
      {add.length > 1 && <FormVisa />}
      {addVisa.length > 0 ? (
        addVisa.map((visa) => <VisaCard addVisa={visa} key={visa.id} />)
      ) : (
        <FormVisa />
      )}
      <div className="add-card">
        <BsPlusLg size="2em" color="blue" />
        <BsCreditCard2Back size="2em" color="grey" />
        <p>
          <button onClick={() => handleAddCard()}>Add Card</button>
        </p>
      </div>
    </>
  );
};
