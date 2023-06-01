import { useLocation } from "react-router-dom";
import { calculationPrice, breakLine } from "../../utils/customFunctions";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { Terms } from "../../components/Terms";
import { DeliveryCard } from "../Delivery";
import { PaymentCard } from "../Payment";

export const Resume = () => {
  const location = useLocation();
  console.log("[props]", location.state);
  const { tickets } = location.state;
  const price = 229;
  const fees = 44.08;
  const orderProcessingFees = 2.95;
  const TextNotes = `xfr XFER Proof at least one of dose COVID-19 vaccination for ages 5 to 11 and guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses or one dose of Johnson & Johnson vaccine. \nMask must be worm.`;

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
    <>
      <section>
        <DeliveryCard />
        <article>
          <PaymentCard />
        </article>
      </section>
      <aside>
        <Card>
          <CardTitle title="Total" subtitle={`$ ${calcTotalPrice()}`} />
          <CardTitle
            title="Tickets"
            contentText={ticketsText}
            contentValue={`$ ${calculationPrice(price, tickets.value)}`}
          />
          <CardTitle title="Notes from seller" text={breakLine(TextNotes)} />
          <CardTitle
            title="Fees"
            contentText={`Service Fee: $ ${fees} x ${tickets.value}`}
            contentValue={`$ ${fees * tickets.value}`}
            contentExtraText={textFees}
            contentExtraResult={`$ ${orderProcessingFees}`}
          />
          <a href="/">Cancel Order</a>
          <CardTitle
            title="Delivery"
            contentText="Mobile entry"
            contentValue="Free"
          />
          <Terms />
        </Card>
      </aside>
    </>
  );
};
