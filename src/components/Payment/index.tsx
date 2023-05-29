import { useLocation } from "react-router-dom";
import { calculationPrice } from "../../utils/customFunctions";
import { Card } from "../Card";
import { CardTitle } from "../CardTitle";
import { Terms } from "../Terms";

export const Payment = () => {
  const location = useLocation();
  console.log("[props]", location.state);
  const { show, tickets } = location.state;
  const price = 229;
  const fees = 44.08;
  const orderProcessingFees = 2.95;
  const TextNotes =
    "xfr XFER Proof at least one of dose COVID-19 vaccination for ages 5 to 11 and guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses or one dose of Johnson & Johnson vaccine. \n Mask must be worm";

  const textFees = "Order Processing Fee";
  const ticketsText = `Resale tickets: $ ${price} x ${tickets.value}`;

  const calcTotalPrice = () => {
    const TotalPrice = price * tickets.value;
    return (
      TotalPrice +
      parseFloat(fees) +
      parseFloat(orderProcessingFees)
    ).toFixed(2);
  };

  return (
    <div>
      <Card>
        <CardTitle title="Total" subtitle={calcTotalPrice()} />
        <CardTitle
          title="Tickets"
          contentText={ticketsText}
          contentValue={calculationPrice(price, tickets.value)}
        />
        <CardTitle title="Notes from seller" text={TextNotes} />
        <CardTitle
          title="Fees"
          contentText={`Service Fee: $ ${fees} x ${tickets.value}`}
          contentValue={fees * tickets.value}
          contentExtraText={textFees}
          contentExtraResult={orderProcessingFees}
        />
        <CardTitle title="Delivery" text="Mobile entry" />
        <Terms />
      </Card>
    </div>
  );
};
