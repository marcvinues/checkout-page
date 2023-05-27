import "./style.scss";
interface BtnProps {
  BtnText: string;
  onclick: () => void;
  type?: "submit" | "reset" | "button" | undefined;
}
export const Button = ({ BtnText, onclick, type }: BtnProps) => {
  return (
    <button onClick={onclick} type={type}>
      {BtnText}
    </button>
  );
};
