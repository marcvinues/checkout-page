import { Card } from "../Card";
import { CardTitle } from "../CardTitle";
import { Button } from "../Button";

export const Payment = () => {
  const TextNotes =
    "xfr XFER Proof at least one of dose COVID-19 vaccination for ages 5 to 11 and guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses or one dose of Johnson & Johnson vaccine. \n Mask must be worm";

  return (
    <div>
      <Card>
        <CardTitle title="Total" subtitle="500$" />
        <CardTitle title="Tickets" />
        <CardTitle title="Notes from seller" text={TextNotes} />
        <CardTitle title="Fees" text="fees" />
        <CardTitle title="Delivery" text="Mobile entry" />
        <Button BtnText="Place Order" />
      </Card>
    </div>
  );
};
