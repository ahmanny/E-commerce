interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  setSelectedColor,
}: ColorSelectorProps) {
  return (
    <div>
      <div className=" flex space-x-2 mt-3">
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            className={`p-1 rounded-full ${
              selectedColor === color
                ? "border-black border-2"
                : "border-2 border-transparent"
            }`}
            onClick={() => setSelectedColor(color)}
          >
            <span
              className={`h-10 w-10 rounded-full bg-${color}-500 block`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}
