import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import styles from './MainScreen.styles';
import {SearchBar} from "../../components/search-bar";

type MainScreenProps = {
    navigation: NavigationStackProp;
};

export const MainScreen: FC<MainScreenProps> = ({navigation}) => {

    const onClickSearchHandler = () => {
        navigation.navigate('Search');
    };

    return <SafeAreaView style={styles.main_screen_container}>
        <View style={styles.main_screen}>
            <Text style={styles.app_name}>CocktailFinder</Text>
            <SearchBar placeholder="Search your favorite cocktail" onFocus={onClickSearchHandler}/>
        </View>
    </SafeAreaView>;
};
