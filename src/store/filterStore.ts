import { create } from "zustand";

type FilterState = {
    selectedCategories: string[];
    selectedGenders: string[];
    selectedMaterials: string[];
    selectedColors: string[];
    selectedSizes: string[];
    priceRange: [number, number];
    addRemoveCategory: (category: string) => void;
    addRemoveGender: (gender: string) => void;
    addRemoveMaterial: (material: string) => void;
    addRemoveColor: (color: string) => void;
    addRemoveSize: (size: string) => void;
    setPriceRange: (range: [number, number]) => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
    selectedCategories: [],
    selectedGenders: [],
    selectedMaterials: [],
    selectedColors: [],
    selectedSizes: [],
    priceRange: [0, 500], // Default price range
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),
    // add a category to filter with
    addRemoveCategory: (category) =>
        set((state) => ({
            selectedCategories: state.selectedCategories.includes(category)
                ? state.selectedCategories.filter((c) => c !== category)
                : [...state.selectedCategories, category],
        })),
    // add a gender to be filtered with
    addRemoveGender: (gender) =>
        set((state) => ({
            selectedGenders: state.selectedGenders.includes(gender)
                ? state.selectedGenders.filter((c) => c !== gender)
                : [...state.selectedGenders, gender],
        })),
    // add a material to be filtered with
    addRemoveMaterial: (material) =>
        set((state) => ({
            selectedMaterials: state.selectedMaterials.includes(material)
                ? state.selectedMaterials.filter((c) => c !== material)
                : [...state.selectedMaterials, material],
        })),
    // add a color to be filtered with
    addRemoveColor: (color) =>
        set((state) => ({
            selectedColors: state.selectedColors.includes(color)
                ? state.selectedColors.filter((c) => c !== color)
                : [...state.selectedColors, color],
        })),
    // add a size to be filtered with
    addRemoveSize: (size) =>
        set((state) => ({
            selectedSizes: state.selectedSizes.includes(size)
                ? state.selectedSizes.filter((s) => s !== size)
                : [...state.selectedSizes, size],
        })),
    setPriceRange: (range) => set({ priceRange: range }),
}));
