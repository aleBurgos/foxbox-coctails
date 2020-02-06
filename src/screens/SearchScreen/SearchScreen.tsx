import React, {FC} from 'react';
import {ActivityIndicator, SafeAreaView, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styles from './SearchScreen.styles';
import {CocktailList} from '../../components/cocktail-list';
import {Cocktail} from '../../types';
import {SearchHeader} from "../../components/search-header/SearchHeader";

type MainScreenProps = {
	navigation: NavigationStackProp;
	searchCocktails: any;
	items: Cocktail[];
	loading: boolean;
};

export const SearchScreen: FC<MainScreenProps> = ({
	navigation,
	loading,
	items,
}) => {
	return (
		<SafeAreaView style={styles.search_screen_container}>
			<View style={styles.search_screen}>
				{loading ? (
					<ActivityIndicator color="white" size="large" />
				) : (
					<CocktailList items={items} />
				)}
			</View>
		</SafeAreaView>
	);
};
