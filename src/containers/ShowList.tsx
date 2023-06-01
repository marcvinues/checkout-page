import { useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Logo from "../components/Logo/Logo";
import "./style.scss";
export const ShowList = () => {
  const [show, setShow] = useState("");
  const [tickets, setTickets] = useState("");
  const navigate = useNavigate();

  const options = [
    { value: "Metallica", label: "Metallica" },
    { value: "Megadeth", label: "Megadeth" },
    { value: "Trivium", label: "Trivium" },
    { value: "Slayer", label: "Slayer" },
    { value: "Crim", label: "Crim" },
    { value: "WASP", label: "WASP" },
    { value: "Rancid", label: "Rancid" },
    { value: "NOFX", label: "NOFX" },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { show: show, tickets: tickets } });
  };
  return (
    <div>
      <div>
        <Logo />
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <div>
          <Button type="submit" BtnText="Accept" disabled={false} />
        </div>
      </form>
    </div>
  );
};
