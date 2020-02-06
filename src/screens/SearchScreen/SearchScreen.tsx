import React, {FC} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styles from './SearchScreen.styles';
import {CocktailList} from '../../components/cocktail-list';
import {Cocktail} from '../../types';
import {SearchHeader} from '../../components/search-header/SearchHeader';

type MainScreenProps = {
  navigation: NavigationStackProp;
  searchCocktails: any;
  items: Cocktail[];
  loading: boolean;
  error: string;
};

export const SearchScreen: FC<MainScreenProps> = ({
  navigation,
  loading,
  items,
  error,
}) => {
  const renderResult = () => {

      if(error){
          return <Text style={styles.error_message}>Something went wrong: {error} </Text>
      }

    return loading ? (
      <ActivityIndicator color="white" size="large" />
    ) : (
      <CocktailList items={items} />
    );
  };

  return (
    <SafeAreaView style={styles.search_screen_container}>
      <View style={styles.search_screen}>{renderResult()}</View>
    </SafeAreaView>
  );
};
