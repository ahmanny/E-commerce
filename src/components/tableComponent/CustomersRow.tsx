import { Avatar, Menu, Portal, Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function CustomersRow({ item }: { item: any }) {
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
      <Table.Cell>{item.email}</Table.Cell>
      <Table.Cell>{item.shippingAddress}</Table.Cell>
      <Table.Cell>
        <Menu.Root>
          <Menu.Trigger asChild>
            <button>
              <HiOutlineDotsHorizontal />
            </button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="edit">Edit</Menu.Item>
                <Menu.Item
                  value="delete"
                  color="fg.error"
                  _hover={{ bg: "bg.error", color: "fg.error" }}
                >
                  Delete...
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>{" "}
      </Table.Cell>
    </>
  );
}
