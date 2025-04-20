import { Avatar, Menu, Portal, Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function ReviewsRow({ item }: { item: any }) {
  return (
    <>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        <Avatar.Root shape="rounded" size="lg" colorPalette={"blue"}>
          <Avatar.Fallback name={item.name} />
          <Avatar.Image src={item.image} />
        </Avatar.Root>
      </Table.Cell>
      <Table.Cell>{item.name}</Table.Cell>
      <Table.Cell>{item.review}</Table.Cell>
      <Table.Cell>
        <button>
          <HiOutlineDotsHorizontal />
        </button>
      </Table.Cell>
    </>
  );
}
