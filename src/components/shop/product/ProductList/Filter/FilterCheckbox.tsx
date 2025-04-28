interface FilterCheckboxProps {
  label: string;
  items: string[];
  selectedItems: string[];
  addRemoveItem: (item: string) => void;
}

export default function FilterCheckbox({
  addRemoveItem,
  items,
  selectedItems,
  label,
}: FilterCheckboxProps) {
  return (
    <div className="mb-6">
      <h1 className="font-semibold mb-3">{label}</h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`${label}-${item}`}
              checked={selectedItems.includes(item)}
              onChange={() => addRemoveItem(item)}
              className="accent-black"
            />
            <label htmlFor={`${label}-${item}`} className="capitalize">
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
