import React from 'react';
import {render} from 'react-native-testing-library';
import {SearchScreen} from "./SearchScreen";
import {Cocktail} from "../../types";

const cocktails: Cocktail[] = [
    {
        id: '1',
        name: 'Long vodka',
        thumb: 'https://www.thecocktaildb.com/images/media/drink/9179i01503565212.jpg'
    },
    {
        id: '2',
        name: 'Vodka Fizz',
        thumb: "https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg"
    },
    {
        id: '3',
        name: 'Coffee-Vodka',
        thumb: 'https://www.thecocktaildb.com/images/media/drink/qvrrvu1472667494.jpg'
    }
];

describe('SearchScreen', () => {
    it('show error when it is present', () => {
        const error = "error message!";
        const {getByTestId} = render(<SearchScreen items={[]} error={error}/>);
        const element = getByTestId('error-message');
        expect(element.props.children.join('')).toEqual(`Something went wrong: ${error} `);
    });

    it('show cocktails  when items are present', () => {
        const { getAllByTestId } = render(<SearchScreen items={cocktails}   />);
        const element = getAllByTestId('cocktail-list-item');
        expect(element.length).toEqual(cocktails.length);
    });


    it('show empty when no items are present ', () => {
        const { getAllByTestId } = render(<SearchScreen items={[]}   />);
        expect(()=>getAllByTestId('cocktail-list-item')).toThrow(Error);
    });

    it('while the data is loading, show spinner', () => {
        const { getByTestId } = render(<SearchScreen items={[]} loading   />);
        expect(getByTestId('spinner')).not.toBeNull();
    });
});
