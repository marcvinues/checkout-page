import { useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
export const ShowList = () => {
  const [show, setShow] = useState("");
  const [tickets, setTickets] = useState("");
  const navigate = useNavigate();

  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" },
  ];

  const NumberOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  const handleSubmit = () => {
    console.log("[show]", show.value);
    console.log("[ticketa]", tickets.value);
    navigate("/payment");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Dropdown
          placeholder="Search show..."
          options={options}
          onChange={(value: string) => setShow(value)}
        />
        <Dropdown
          placeholder="Number"
          options={NumberOptions}
          onChange={(value: string) => setTickets(value)}
        />
        <Button type="submit" BtnText="Accept" />
      </form>
    </div>
  );
};
