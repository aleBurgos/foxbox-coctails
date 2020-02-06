export interface Cocktail {
    id: string
    name: string
    thumb: string
}


export interface CocktailService {
    fetchCocktails: (searchQuery: string) => Promise<Cocktail[]>;
}

declare module '*.png'
