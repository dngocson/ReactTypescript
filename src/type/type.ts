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
