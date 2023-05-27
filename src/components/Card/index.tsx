import "./style.scss";

interface Props {
  children?: JSX.Element | JSX.Element[];
}
export const Card = ({ children }: Props) => (
  <div className="card">{children}</div>
);
