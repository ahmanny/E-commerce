interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  setSelectedsize: (size: string) => void;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  setSelectedsize,
}: SizeSelectorProps) {
  return (
    <div>
      <div className=" flex space-x-2 mt-3">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            className={` h-12 w-12 border text-sm rounded-md flex items-center  justify-center ${
              selectedSize === size ? "border-black" : ""
            }`}
            onClick={() => setSelectedsize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
