import React from 'react';
import { View } from 'react-native';

const Container = ({ children }) => {
    return (
        <View  style={{ flex: 1, backgroundColor: "white" }}>
            {children}
        </View>
    )
};

export default Container;