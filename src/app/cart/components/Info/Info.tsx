interface ILabelInfoProps {
  title: string;
  content: string | number;
}

export const Info = ({ title, content }: ILabelInfoProps): JSX.Element => {
  return (
    <div className="border-b border-zinc-400 m-1 px-1">
      <div className="inline">
        <span className="font-bold mr-3 text-black">{title}</span>
        {content}
      </div>
    </div>
  );
};
