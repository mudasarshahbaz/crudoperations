import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
    Home,RepositoryDetail,RepositoryList,UsersList,AddUser
} from '../screens';
import { route, screen } from '../lib/utils/constants';


import styles from './style'
import themeStyle from '../assets/styles/theme.style';

const Stack = createStackNavigator();

function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName={route.MAIN} >
            <Stack.Screen name={route.MAIN} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={route.REPOSITORYLIST} component={RepositoryList} options={{ headerShown: false }} />
            <Stack.Screen name={route.REPOSITORYDETAIL} component={RepositoryDetail} options={{ headerShown: false }} />
            <Stack.Screen name={route.USERLIST} component={UsersList} options={{ headerShown: false }} />
            <Stack.Screen name={route.ADDUSER} component={AddUser} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}



export default AppRoutes;


