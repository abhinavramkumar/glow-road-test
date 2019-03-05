export interface ICart {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface ICategory {
  name: string;
  id: string;
  url: string;
}

export interface IOffer {
  id: string;
  name: string;
  imageURL: string;
}

export interface IProduct {
  id: string;
  name: string;
  imageURL: string;
  purchasedAmount: number;
}
