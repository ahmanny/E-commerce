interface QuantityInputProps {
  quantity: number;
  setQuantity: (value: number) => void;
}
export default function QuantityInput({
  quantity,
  setQuantity,
}: QuantityInputProps) {
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex items-center h-12 rounded-md border text-[#5C5F6A] text-xl w-fit mt-3">
      <button
        type="button"
        className=" px-6 h-full text-3xl"
        onClick={handleDecrease}
      >
        -
      </button>
      <span className="px-7">{quantity}</span>
      <button
        type="button"
        className=" px-6 h-full text-3xl"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}
