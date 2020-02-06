import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './SearchHeader.styles';
import {SearchBar} from '../search-bar';
import {withNavigation} from 'react-navigation';
import {HeaderBackButton} from 'react-navigation-stack';

export type SearchInputProps = {
	onFocus?: any;
	placeholder?: string;
	cancelSearch?: any;
	changeSearchTerm?: any;
	searchTerm?: string;
	navigation?: any;
};
export const SearchHeader =
	({
		navigation,
		onFocus,
		changeSearchTerm,
		searchTerm,
		cancelSearch,
	}: SearchInputProps) => {
		const onFocusHandler = () => {
			if (onFocus) {
				onFocus();
			}
		};

		const onCancelSearch = () => {
			if (cancelSearch) {
				cancelSearch();
			}
		};

		const onBackToMainScreen = () => {
            onCancelSearch();
            navigation.goBack();
		};

		const onChangeInput = (text: string) => {
			if (changeSearchTerm) {
				changeSearchTerm(text);
			}
		};

		return (
			<SafeAreaView style={styles.search_header__safe_area}>
				<View style={styles.search_header}>
					{!searchTerm ? (
						<>
							<HeaderBackButton
								labelVisible={false}
								labelStyle={{fontSize: 12}}
								onPress={onBackToMainScreen}
							/>
						</>
					) : null}

					<View style={styles.search_header__searchbar}>
						<SearchBar
							onChange={onChangeInput}
							onFocus={onFocusHandler}
							searchTerm={searchTerm}
							autoFocus
							placeholder="Search"
						/>
					</View>

					<>
						{searchTerm ? (
							<TouchableOpacity onPress={onCancelSearch}>
								<Text>Cancel</Text>
							</TouchableOpacity>
						) : null}
					</>
				</View>
			</SafeAreaView>
		);
	};


export const SearchHeaderWithNavigation = withNavigation(SearchHeader);
