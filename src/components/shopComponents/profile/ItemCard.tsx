import { Avatar } from "@chakra-ui/react";

export interface item {
  title: string;
  image: string;
  price: number;
  color?: string;
  size?: string;
  date: string;
  orderStatus?: string;
}

interface ItemProps {
  item: item;
  btnText: string;
  btn: Function;
}

export default function ItemCard({ item, btn, btnText }: ItemProps) {
  const viewItem = () => {
    btn();
  };
  const removeItem = () => {
    console.log("deleted");
  };
  return (
    <div className=" w-[620px] ">
      <div className="flex items-center justify-between mb-4">
        {/* Product Image */}
        <div className="w-[80px] h-[80px] rounded-md overflow-hidden bg-gray-100">
          <Avatar.Root shape="rounded" size="full" colorPalette={"blue"}>
            <Avatar.Fallback name={item.title} />
            <Avatar.Image src={item.image} />
          </Avatar.Root>
        </div>

        {/* Product Details */}
        <div className="flex-1 px-4">
          <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
          <p className="text-gray-500 text-base flex items-center gap-2">
            {"Ordered on: "}
            {item.date}
          </p>
          {/* Product Price */}
          <div className="text-lg font-bold mr-4">${item.price.toFixed(2)}</div>
        </div>
        <div className="flex gap-7 justify-center items-center capitalize">
          {/* if the card is for wish list items or ordered list  */}
          <div className="text-lg font-bold mr-4 border-b border-gray-400">
            {item.orderStatus}
          </div>
          <button
            type="button"
            onClick={viewItem}
            className="border border-black py-[12px] px-[24px] capitalize rounded-lg"
          >
            {btnText}
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
