interface IActionBtnProps extends React.HTMLProps<HTMLButtonElement> {
  colorStyle?: "primary" | "secondary";
}

export const ActionBtn = ({
  children,
  colorStyle = "primary",
  ...props
}: IActionBtnProps): JSX.Element => {
  return (
    <button
      className={`m-1 py-1 px-10  ${
        colorStyle === "primary"
          ? "bg-pirates-gold hover:bg-pirates-red text-pirates-black  hover:text-pirates-white"
          : "bg-pirates-red hover:bg-pirates-gold text-pirates-white hover:text-pirates-black"
      } font-pirata text-1xl rounded-lg`}
    >
      {children}
    </button>
  );
};
