import { StyleProp, StyleSheet } from 'react-native';



export default StyleSheet.create({
    cocktail_item: {
        borderRadius: 4,
        backgroundColor:'white',
        padding: 16,
        marginHorizontal: 8,
        marginVertical: 4,
        flexDirection: 'row',
        alignItems:'center'

    },
    cocktail_item__thumb: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    cocktail_item__name: {
        fontSize: 16,
        marginLeft: 16
    },

});
