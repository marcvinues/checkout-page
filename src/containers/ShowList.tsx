import { useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import "./style.scss";
export const ShowList = () => {
  const [show, setShow] = useState("");
  const [tickets, setTickets] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  /*  Instead of hardcode this options whe can do like this:
      use fetch or axios ( I prefer axios to control the errors)
      const [options, setOptions] = useState()
      axios.get('/url') // that could be a json file or url from api
      .then(data => data.data)
      .catch(error => setError(error))
      whit this approach for each dropdown, also envolve with useEffect
      to get the data well performed
  */

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
  useEffect(() => {
    if (show && tickets) {
      setDisabled(false);
    }
  }, [show, tickets]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", { state: { show: show, tickets: tickets } });
  };
  return (
    <div className="form-select">
      <h1>Ticketmaster</h1>
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
          <Button type="submit" BtnText="Accept" disabled={disabled} />
        </div>
      </form>
    </div>
  );
};
