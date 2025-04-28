interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (value: number) => void;
  errors?: any;
}
export default function QuantitySelector({
  quantity,
  setQuantity,
  errors,
}: QuantitySelectorProps) {
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div>
      {errors && (
        <label className="block text-base uppercase font-semibold text-[#5C5F6A] mb-3">
          quantity
        </label>
      )}
      <div className="flex items-center h-12 rounded-md border text-[#5C5F6A] text-xl w-fit">
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
      {errors?.quantity?.message && (
        <p className="text-red-500 text-sm ">
          {String(errors.quantity.message)}
        </p>
      )}
    </div>
  );
}
