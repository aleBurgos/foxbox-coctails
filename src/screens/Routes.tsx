import {createStackNavigator} from 'react-navigation-stack';

import {MainScreen} from './MainScreen';
import {SearchScreen} from './SearchScreen';
import {SearchHeader} from '../components/search-header';
import React from 'react';

export const AppNavigator = createStackNavigator(
	{
		Main: {
			screen: MainScreen,
			navigationOptions: {
				headerShown: false,
			},
		},
		Search: {
			screen: SearchScreen,
			navigationOptions: {
				headerBackTitleVisible: false,
				header: () => {
					return <SearchHeader />;
				},
			},
		},
	},
	{
		initialRouteName: 'Main',
		headerMode:'screen'
	},
);
