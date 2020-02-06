import { Cocktail, CocktailService} from '../types';

const apiUrl =
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


export const cocktailsService: CocktailService = {
    fetchCocktails: async (searchQuery: string): Promise<Cocktail[]> => {
        return fetch(apiUrl + searchQuery)
            .then(response => response.json())
            .then((data) => {
                return (data.drinks || []).map((drink: any)=>{
                    return {
                        id: drink.idDrink,
                        name: drink.strDrink,
                        thumb: drink.strDrinkThumb
                    }
                });
            })
    }
};

