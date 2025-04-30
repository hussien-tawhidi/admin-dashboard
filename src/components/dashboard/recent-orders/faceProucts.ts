
export interface OrderTypes  {
  id: string;
  date: string;
  product: string;
  customerName: string;
  phone: string;
  address: string;
  paymentType: string;
  status: "Completed" | "Processing";
};
export interface ProductTableProps {
  filteredOrders: OrderTypes[];
};
export const orders: OrderTypes[] = [
    {
      id: "#TZ5625",
      date: "29 April 2024",
      product: "Premium Mattress",
      customerName: "Anna M. Hines",
      phone: "(+1)-555-1564-261",
      address: "Burr Ridge, Illinois",
      paymentType: "Credit Card",
      status: "Completed",
    },
    {
      id: "#TZ9652",
      date: "25 April 2024",
      product: "Memory Foam Pillow",
      customerName: "Judith H. Fritsche",
      phone: "(+57)-305-5579-759",
      address: "Sullivan, Kentucky",
      paymentType: "Credit Card",
      status: "Completed",
    },
    {
      id: "#TZ5984",
      date: "25 April 2024",
      product: "Bed Frame",
      customerName: "Peter T. Smith",
      phone: "(+33)-655-5187-93",
      address: "Yreka, California",
      paymentType: "PayPal",
      status: "Completed",
    },
    {
      id: "#TZ3625",
      date: "21 April 2024",
      product: "Duvet Cover Set",
      customerName: "Emmanuel J. Delcid",
      phone: "(+30)-693-5553-637",
      address: "Atlanta, Georgia",
      paymentType: "PayPal",
      status: "Processing",
    },
    {
      id: "#TZ8652",
      date: "18 April 2024",
      product: "Sheet Set",
      customerName: "William J. Cook",
      phone: "(+91)-855-5446-150",
      address: "Rosenberg, Texas",
      paymentType: "Credit Card",
      status: "Processing",
    },
  ];