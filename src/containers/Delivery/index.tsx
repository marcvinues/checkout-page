import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { breakLine } from "../../utils/customFunctions";

export const DeliveryCard = () => {
  const descriptionText = `Tickes available by Sun Apr 3, 2023\nThese mobile tickets will be transferred directly to you from a trusted seller. We'll email you instructions on how to accept them on the original ticket provider's mobile app
  `;

  return (
    <Card>
      <CardTitle
        title="Delivery"
        contentText="Mobile Entry - Free"
        text={breakLine(descriptionText)}
      />
    </Card>
  );
};
