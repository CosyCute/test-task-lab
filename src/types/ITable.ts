export interface TableItem {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    city: string;
    country: string;
}

export interface TableState {
    table: TableItem[]
}

export type SortKeys = 'id' | 'name' | 'surname' | 'email' | 'phone' | 'city' | 'country'