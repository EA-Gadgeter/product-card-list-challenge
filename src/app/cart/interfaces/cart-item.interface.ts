export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  unitPrice: number;
  productImage: ProductCartImage;
}

interface ProductCartImage {
  thumbnail: string;
  mobile:    string;
  tablet:    string;
  desktop:   string;
}

