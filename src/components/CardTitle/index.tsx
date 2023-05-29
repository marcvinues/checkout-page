import "./style.scss";
interface TitleProps {
  title: string;
  subtitle?: string | number;
  text?: string;
  contentText?: string | number;
  contentValue?: string | number;
  contentExtraText?: string | number;
  contentExtraResult?: string | number;
}

export const CardTitle = ({
  title,
  subtitle,
  text,
  contentText,
  contentValue,
  contentExtraText,
  contentExtraResult,
}: TitleProps) => (
  <div className="content-title">
    <div className="title">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
    <div className="title">
      <p>{contentText}</p>
      <p>{contentValue}</p>
    </div>
    <div className="title">
      <p>{contentExtraText}</p>
      <p>{contentExtraResult}</p>
    </div>
    <div>
      <p>{text}</p>
    </div>
  </div>
);
