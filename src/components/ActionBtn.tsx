interface IActionBtnProps extends React.HTMLProps<HTMLButtonElement> {
  colorStyle?: "primary" | "secondary";
}

const ActionBtn: React.FC<IActionBtnProps> = ({
  children,
  colorStyle = "primary",
  ...props
}) => {
  return (
    <button
      className={`m-1 py-1 px-10  ${
        colorStyle === "primary"
          ? "bg-pirates-gold hover:bg-pirates-red text-pirates-black  hover:text-pirates-white"
          : "bg-pirates-red hover:bg-pirates-gold text-pirates-white hover:text-pirates-black"
      } font-pirata text-2xl rounded-lg`}
    >
      {children}
    </button>
  );
};

export default ActionBtn;
