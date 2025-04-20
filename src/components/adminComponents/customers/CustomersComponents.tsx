import TableComponent from "../../tableComponent";

const tableHeader = ["name", "email", "shipping address"];
const customers = [
  {
    id: 1,
    name: "esther edwards",
    email: "estheredwards@gmail.com",
    shippingAddress: "8642 Yule Street, Arvada CO 80007",
  },
  {
    id: 2,
    name: "wade warren",
    email: "wadewarren@gmail.com",
    shippingAddress: "5331 Rexford Court, Montgomery AL 36116",
  },
  {
    id: 3,
    name: "Robert fox",
    email: "robertfox@gmail.com",
    shippingAddress: "2325 Eastridge Circle, Moore OK 73160",
  },
  {
    id: 4,
    name: "theressa webb",
    email: "theressawebb@gmail.com",
    shippingAddress: "2436 Naples Avenue, Panama City FL 32405",
  },
  {
    id: 5,
    name: "theressa webb",
    email: "theressawebb@gmail.com",
    shippingAddress: "6095 Terry Lane, Golden CO 80403",
  },
  {
    id: 6,
    name: "theressa webb",
    email: "theressawebb@gmail.com",
    shippingAddress: "4001 Anderson Road, Nashville TN 37217",
  },
  {
    id: 7,
    name: "theressa webb",
    email: "theressawebb@gmail.com",
    shippingAddress: "19141 Pine Ridge Circle, Anchorage AK 99516",
  },
  {
    id: 8,
    name: "theressa webb",
    email: "theressawebb@gmail.com",
    shippingAddress: "2613 Cottonwood Street, Anchorage AK 99508",
  },
];

export default function CustomersComponents() {
  return (
    <div className="w-[80%] h-[800px] ">
      <TableComponent
        tableHeaders={tableHeader}
        componentFor="customers"
        data={customers}
      />
    </div>
  );
}
