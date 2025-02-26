import ProductForm from "@/components/adminComponents/products/ProductForm";

export default function page() {
  return (
    <div className="bg-white p-8 w-[85%]">
      {/* page heading */}
      <div className=" pb-8 border-b-[1px] border-solid border-gray-200 mb-12">
        <h1 className=" text-xl font-semibold ">Add Product</h1>
      </div>
      {/* add product form */}
      <ProductForm btnText="Save product" />
    </div>
  );
}
