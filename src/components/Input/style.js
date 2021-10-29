import { StyleSheet, Dimensions } from 'react-native';
import THEME from '../../assets/styles/theme.style';
const screenWidth = Dimensions.get('window').width;
export default StyleSheet.create({
    containerStyle: {
        height: 65,
        paddingVertical: '2%',
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        borderRadius: 15,
        marginTop: 15
    },
    inputContainerStyle: {
        height: 40,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        borderWidth: 0.5,
        borderRadius: 25,
    },
    labelStyle: {
        fontSize: 14,
        marginLeft: 5,
        fontWeight: "normal",
        color: THEME.PRIMARY_TEXT_COLOR,
        height: 25,
    },
    inputStyle: {
        flex: 1,
        fontSize: 14,
        fontWeight:"bold"
    },
}
);
