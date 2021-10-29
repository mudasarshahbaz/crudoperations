import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// Add
import { PersistGate } from 'redux-persist/integration/react';

// Modify to add persistor
import { store, persistor } from './redux/CreateStore';

import AppRoutes from './navigation'
import THEME from './assets/styles/theme.style';
import { Provider } from 'react-redux';
export default function App() {
    React.useEffect(() => {
        LogBox.ignoreAllLogs();
    }, [])
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <NavigationContainer >
                        <SafeAreaProvider style={{ backgroundColor: THEME.PRIMARY_BACKGROUND_COLOR }}>
                            <StatusBar backgroundColor={THEME.PRIMARY_BACKGROUND_COLOR} barStyle={"dark-content"} />
                            <AppRoutes />
                        </SafeAreaProvider>
                    </NavigationContainer>
                </PersistGate>
            </Provider>

        </>
    );
}


