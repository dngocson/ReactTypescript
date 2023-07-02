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
  key?: number;
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  id?: number;
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
interface position {
  latitude: number;
  longitude: number;
}
export interface Userstate {
  username: string;
  status: "idle" | "loading" | "error";
  position: position;
  address: string;
  error: string;
}
export interface Cartstate {
  cart: CartItem[];
}
interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

export interface GeolocationPosition {
  coords: GeolocationCoordinates;
  timestamp: number;
}
export interface dataType {
  address: string;
  cart?: CartItem[];
  customer: string;
  phone: string;
  position: string;
  priority?: boolean;
}
export interface el {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}
