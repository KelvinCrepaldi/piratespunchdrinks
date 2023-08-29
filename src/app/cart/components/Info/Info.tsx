interface ILabelInfoProps {
  title: string;
  content: string | number;
}

export const Info = ({ title, content }: ILabelInfoProps): JSX.Element => {
  return (
    <div className="border-b border-pirates-black m-1 px-1">
      <div className="inline">
        <span className="font-bold mr-3">{title}</span>
        {content}
      </div>
    </div>
  );
};
