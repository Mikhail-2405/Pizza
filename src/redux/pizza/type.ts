export type Pizza = {
    id: string; 
    imageUrl: string; 
    title: string; 
    types: number[]; 
    sizes: number[]; 
    price: number;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface PizzaSliceState {
    items: Pizza[];
    status: Status;
}