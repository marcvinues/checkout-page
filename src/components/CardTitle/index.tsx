import "./style.scss";
interface TitleProps {
  title: string;
  subtitle?: string;
  text?: string;
}

export const CardTitle = ({ title, subtitle, text }: TitleProps) => (
  <div className="content-title">
    <div className="title">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
    <div>
      <p>{text}</p>
    </div>
  </div>
);
