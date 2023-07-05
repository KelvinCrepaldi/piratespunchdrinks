import { IActionBtnProps } from "@/interfaces/actionBtn.interface";

const ActionBtn: React.FC<IActionBtnProps> = ({
  children,
  colorStyle = "primary",
  ...props
}) => {
  return (
    <button
      className={`m-1 py-1 px-10  ${
        colorStyle === "primary"
          ? "bg-pirates-gold text-pirates-black"
          : "bg-pirates-red text-pirates-silver"
      } font-pirata text-2xl rounded-lg`}
    >
      {children}
    </button>
  );
};

export default ActionBtn;
