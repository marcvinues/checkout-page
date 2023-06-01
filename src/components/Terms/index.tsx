import { useState } from "react";
import { Button } from "../Button";

export const Terms = () => {
  const [checked, setChecked] = useState(false);
  const termsText = "* All Sales Final - No Refounds";
  const checkBoxText = "I have read and agree to the current terms of use";

  const handleClick = (e) => {
    e.preventDefault();
    alert("Your tickets has submited");
  };

  return (
    <div>
      <p>{termsText}</p>
      <div style={{ display: "flex" }}>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p>{checkBoxText}</p>
      </div>
      <Button
        BtnText="Place Order"
        onclick={(e) => handleClick(e)}
        disabled={!checked}
      />
    </div>
  );
};
