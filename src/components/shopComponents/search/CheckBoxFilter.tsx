//     <div>
//
//
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
"use client";

interface CheckBoxFilterProps {
  label: string;
  items: string[];
  selectedItems: string[];
  addRemoveItem: (item: string) => void;
}
export default function CheckBoxFilter({
  addRemoveItem,
  items,
  label,
  selectedItems,
}: CheckBoxFilterProps) {
  return (
    <div>
      <h1 className="font-semibold mb-4 text-xl">{label}</h1>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center py-3 gap-2 border-b border-b-gray-200"
          >
            <input
              type="checkbox"
              id={item}
              className="rounded border-gray-300 cursor-pointer"
              onChange={() => addRemoveItem(item)}
              checked={selectedItems.includes(item)}
            />
            <label htmlFor={item} className="text-xl cursor-pointer capitalize">
              {item}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
