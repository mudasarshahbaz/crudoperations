import THEME from './theme.style';
import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    rootContainer: {
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    headerContainer: {
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        borderBottomWidth: 0,
        backgroundColor: THEME.HEADER_BACKGROUND_COLOR,
        justifyContent: 'space-around'
    },
    headerTitleStyle: {
        color: '#3471D3',
        fontSize: THEME.FONT_SIZE_XLARGE
    },
    errorText: {
        paddingTop: "1%",
        paddingLeft: 8,
        color: '#c30000',
        fontSize: 12,
        marginLeft: 5
    },
});

