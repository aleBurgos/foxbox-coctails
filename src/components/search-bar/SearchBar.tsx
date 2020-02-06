import React, {FC} from 'react';
import {Image, TextInput, View} from 'react-native';
import styles from './SearchBar.styles';
import searchIcon from '../../../assets/icons/search.png';

type SearchInputProps = {
  onFocus?: any;
  onChange?: any;
  placeholder?: string;
  autoFocus?: boolean;
  searchTerm?: string;
};

export const SearchBar: FC<SearchInputProps> = ({
  onFocus,
  placeholder,
  onChange,
  searchTerm,
  autoFocus,
}) => {
  const onFocusHandler = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const onChangeHandler = (text: string) => {
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <View style={styles.search_bar}>
      <Image source={searchIcon} />
      <TextInput
        style={styles.search_bar__input}
        onChangeText={onChangeHandler}
        value={searchTerm}
        autoFocus={autoFocus}
        onFocus={onFocusHandler}
        placeholder={placeholder}
      />
    </View>
  );
};
