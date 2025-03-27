interface ColorSelectorProps {
  selectedColors: string[];
  handleColorChange: (color: string) => void;
}
const colors = ["blue", "red", "yellow", "green", "orange"];

export default function ColorSelector({
  selectedColors,
  handleColorChange,
}: ColorSelectorProps) {
  return (
    <div>
      <div className="flex gap-2 mt-1">
        {colors.map((color) => {
          const isSelected = selectedColors.includes(color);

          return (
            <label
              key={color}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleColorChange(color)}
                className="hidden"
              />
              <span
                className={`h-8 w-8 rounded-full border ${
                  !isSelected ? "bg-opacity-50" : ""
                } block`}
                style={{ backgroundColor: color }}
              ></span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
