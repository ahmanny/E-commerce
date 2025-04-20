import { useDeleteProduct } from "@/lib/utils/hooks/mutations/product.mutations";
import { Avatar, Menu, Portal, Table } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BeatLoader } from "react-spinners";

export default function ProductsRow({ item }: { item: any }) {
  const router = useRouter();
  const useDeleteProductMutation = useDeleteProduct();

  const deleteProduct = (id: string) => {
    useDeleteProductMutation.mutate(id, {
      onSuccess: () => {
        console.log("Product deleted successfully");
        router.refresh(); //refresh the page after the product has been deleted
      },
      onError: (error) => {
        console.error("Error deleting product:", error);
      },
    });
  };
  return (
    <>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        <Avatar.Root shape="rounded" size="lg" colorPalette={"blue"}>
          <Avatar.Fallback name={item.title} />
          <Avatar.Image src={item.images[0]} />
        </Avatar.Root>
      </Table.Cell>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.sku}</Table.Cell>
      <Table.Cell>{item.price}</Table.Cell>
      <Table.Cell>{item.stock_status}</Table.Cell>
      <Table.Cell>{item.gender}</Table.Cell>
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
                <Menu.Item
                  value="edit"
                  onClick={() =>
                    router.push(`/admin/products/${item._id}/edit`)
                  }
                >
                  Edit
                </Menu.Item>
                <Menu.Item
                  value="delete"
                  color="fg.error"
                  onClick={() => deleteProduct(item._id)}
                  _hover={{ bg: "bg.error", color: "fg.error" }}
                >
                  {useDeleteProductMutation.isPending ? (
                    <BeatLoader />
                  ) : (
                    "Delete..."
                  )}
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Table.Cell>
    </>
  );
}
