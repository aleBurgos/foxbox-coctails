import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import 'react-native-gesture-handler';

import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './screens/Routes';

const AppContainer = createAppContainer(AppNavigator);

export default () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};
