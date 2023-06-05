import { IActionBtn } from "@/interfaces/ActionBtn.interface";

export default function ActionBtn({
  children,
  style = "primary",
  ...props
}: any) {
  return (
    <button
      className={`m-1 py-1 px-10  ${
        style === "primary"
          ? "bg-pirates-gold text-pirates-black"
          : "bg-pirates-red text-pirates-silver"
      } font-pirata text-2xl rounded-lg`}
    >
      {children}
    </button>
  );
}
