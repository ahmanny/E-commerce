import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { useCategoryStore } from "@/store/categoryStore";

// fetch  user orders
export const useFetchCategories = () => {
    const { setCategories } = useCategoryStore()

    const {
        data: categories, isLoading, isSuccess, isError, refetch } =
        useQuery({
            queryKey: ["categories"],
            queryFn: async () => {
                try {
                    const { data } = await API.get("/categories/get");
                    console.log(data);
                    // Transform each item into the structure the categories store needs
                    const transformedItems: string[] = data.map(
                        (item: any) =>
                            item.name
                    );
                    console.log("transformed items", transformedItems)
                    setCategories(transformedItems)
                    return transformedItems

                } catch (err) {
                    console.log(err)
                }
            },
            staleTime: 1000 * 60 * 5,
        })
    return { categories, isLoading, isSuccess, isError, refetch };
}

