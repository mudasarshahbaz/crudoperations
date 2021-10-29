import { StyleSheet } from 'react-native';
import THEME from '../../assets/styles/theme.style';

export default StyleSheet.create({
    btnPrimary: {
        height: 54,
        width: '100%',
        marginVertical: "5%",
        backgroundColor: THEME.BUTTON_COLOR
    },
    iconContainerStyle: {
        marginHorizontal: 0
    },
    btnPrimaryText: {
        fontSize: THEME.FONT_SIZE_MEDIUM,
        color: THEME.COLOR_WHITE,
    },
});