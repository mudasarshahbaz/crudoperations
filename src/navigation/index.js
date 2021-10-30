import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    Home, RepositoryDetail, RepositoryList, UsersList, AddUser
} from '../screens';
import { route, screen } from '../lib/utils/constants';


import styles from './style'
import themeStyle from '../assets/styles/theme.style';
import { HeaderLeft } from '../components';

const Stack = createStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName={route.MAIN} >
            <Stack.Screen name={route.MAIN} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={route.REPOSITORYLIST} component={RepositoryList} options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
                headerTitle: screen.REPOSITORYLIST,
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER
            })} />
            <Stack.Screen name={route.REPOSITORYDETAIL} component={RepositoryDetail} options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
                headerTitle: screen.REPOSITORYDETAIL,
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER
            })} />
            <Stack.Screen name={route.USERLIST} component={UsersList} options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
                headerTitle: screen.USERLIST,
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER
            })} />
            <Stack.Screen name={route.ADDUSER} component={AddUser} options={({ navigation }) => ({
                headerLeft: () => <HeaderLeft navigation={navigation} />,
                headerTitle: screen.ADDUSER,
                headerTitleAlign: screen.SCREEN_TITLE_ALIGN_CENTER
            })} />
        </Stack.Navigator>
    );
}



export default AppRoutes;


