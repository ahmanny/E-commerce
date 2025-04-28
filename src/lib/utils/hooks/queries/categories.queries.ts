import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { useCategoryStore } from "@/store/categoryStore";

export const useFetchCategories = () => {
    const { categories: preloadedCategory, setCategories } = useCategoryStore()

    const {
        data: categories, isLoading, isSuccess, isError, refetch } =
        useQuery({
            queryKey: ["categories"],
            queryFn: async () => {
                try {
                    const { data } = await API.get("/categories/get");
                    // Transform each item into the structure the categories store needs
                    const transformedItems: string[] = data.map(
                        (item: any) =>
                            item.name
                    );
                    setCategories(transformedItems)
                    return transformedItems

                } catch (err) {
                    console.log(err)
                }
            },
            staleTime: 1000 * 60 * 60,
            initialData: preloadedCategory,
            refetchOnWindowFocus: false
        })
    return { categories, isLoading, isSuccess, isError, refetch };
}

