export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number | string,
    stock: number,
    categoryId: number;
    image: string;
}

export interface IMenuProps {
    isOpen: boolean;
}

export interface Login {
    email: string,
    password: string;
}

export interface IOrder {
    id: string;
    date: string;
    status: string;
    products: IProduct[];
  }


export interface LoginError {
    email: string;
    password: string;
}

export interface ProductFiltered {
    item: string;
}