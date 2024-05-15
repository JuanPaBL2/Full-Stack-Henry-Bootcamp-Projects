export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number | string,
    stock: number,
    categoryId: number;
    image: string;
}

export interface Login {
    email: string,
    password: string;
}



export interface LoginError {
    email: string;
    password: string;
}

export interface ProductFiltered {
    item: string;
}