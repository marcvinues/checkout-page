import { useLocation, useNavigate } from "react-router-dom";
import { DeliveryCard } from "../Delivery";
import { PaymentCard } from "../Payment";
import "./style.scss";
import { ResumeCard } from "../../components/ResumeCard";

export const Resume = () => {
  const location = useLocation();
  const { tickets } = location.state;
  const navigate = useNavigate();

  if (!tickets) {
    return navigate("/");
  }

  return (
    <div className="payment-container">
      <section>
        <DeliveryCard />
        <article>
          <PaymentCard />
        </article>
      </section>
      <aside>
        <ResumeCard tickets={tickets} />
      </aside>
    </div>
  );
};
