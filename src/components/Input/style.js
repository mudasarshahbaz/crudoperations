import { StyleSheet, Dimensions } from 'react-native';
import THEME from '../../assets/styles/theme.style';
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    containerStyle: {
        height: 50,
    },
    inputContainerStyle: {
        paddingLeft: 8,
        borderColor: 'rgba(110, 120, 170, 1)',
        height: 45,
        marginVertical: 3
    },
    inputStyle: {
        flex: 1,
        marginLeft: 10,
        color: THEME.PRIMARY_TEXT_COLOR,
        fontSize: 16
    },
    labelStyle: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: "normal",
        color: THEME.PRIMARY_TEXT_COLOR,
        height: 25,
    },
}
);
