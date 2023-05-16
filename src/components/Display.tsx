export default function DisplayProducts({ products, title }: any) {
  return (
    <div className="flex flex-col">
      <h2 className="text-red-600 text-center">{title}</h2>
      <div className="border-t border-red-600 flex justify-center flex-wrap space-x-7 py-10">
        <div className="w-44 h-60 bg-black">Item</div>
        <div className="w-44 h-60 bg-black">Item</div>
        <div className="w-44 h-60 bg-black">Item</div>
        <div className="w-44 h-60 bg-black">Item</div>
      </div>
    </div>
  );
}
