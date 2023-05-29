import "./style.scss";
interface BtnProps {
  BtnText: string;
  onclick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}
export const Button = ({
  BtnText,
  onclick,
  type,
  disabled = true,
}: BtnProps) => {
  return (
    <button onClick={onclick} type={type} disabled={disabled}>
      {BtnText}
    </button>
  );
};
