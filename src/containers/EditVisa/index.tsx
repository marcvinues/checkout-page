import { Button } from "../../components/Button";
import { FormVisa } from "../../components/FormVisa";

export const EditVisa = () => {
  return (
    <>
      <div>
        <Button
          onclick={() => window.history.go(-1)}
          BtnText="Return"
          disabled={false}
        />
        <FormVisa />;
      </div>
    </>
  );
};
