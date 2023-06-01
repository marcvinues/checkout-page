import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { VisaComponent } from "../../components/Visa";

export const PaymentCard = () => {
  const vidaComponent = () => {
    return (
      <div>
        <VisaComponent />
      </div>
    );
  };
  return (
    <Card>
      <CardTitle
        title="Payment"
        subtitle="Ticketmaster"
        text={vidaComponent()}
      />
    </Card>
  );
};
