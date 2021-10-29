import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = (props) => {
    return (
        <View style={Style.container}>
            <ActivityIndicator size="large" color="#f1692d" />
        </View>
    )
}

const Style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        borderRadius: 5,
        minHeight: 200,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10
    }
})

export default Loader;