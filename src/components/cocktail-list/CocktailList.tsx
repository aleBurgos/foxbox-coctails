import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image'
import styles from './CocktailList.styles';
import {Cocktail} from "../../types/index";

type CocktailListProps = {
    items: Cocktail[]
};

export const CocktailList: FC<CocktailListProps> = ({items}) => {
    const renderItem = ({item}: any): any => {
        return <View testID="cocktail-list-item" key={item.id} style={styles.cocktail_item}>
            <FastImage
                style={styles.cocktail_item__thumb}
                source={{
                    uri: item.thumb,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.cocktail_item__name}>{item.name}</Text>

        </View>
    };

    return (
        <FlatList data={items} renderItem={renderItem}/>
    );
};
