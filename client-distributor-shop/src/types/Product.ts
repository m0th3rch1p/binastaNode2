export type Product = {
    id?: number,
    category_name?: string,
    category_slug?: string,
    name?: string,
    slug?: string,
    variations?: string[],
    images?: [{ 
        url: string
    }]
};