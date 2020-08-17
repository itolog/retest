export interface OrderItem {
  product_id: number;
  quantity: number;
}

export interface Order {
  id: string;
  customer_id: number;
  totalPrice: number;
  items: {
    [id: number]: OrderItem;
  };
}
