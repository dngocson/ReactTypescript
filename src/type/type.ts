export interface PizzaProps {
  id: number;
  name: string;
  unitPrice: number;
  soldOut: boolean;
  imageUrl: string;
  ingredients: string[];
}
export interface LoaderParams {
  orderId?: string | number | undefined;
}
export interface ActionParams {
  formData: () => Promise<any>;
}
export interface OrderError {
  phone?: string;
}
export interface CartItem {
  key: number;
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  id: number;
}
export interface Order {
  id: string;
  status: string;
  priority: string;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: CartItem[];
}
////////////////// REDUX STATE
export interface Userstate {
  username: string;
}
