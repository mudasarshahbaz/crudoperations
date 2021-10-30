import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Icon } from '../index';
import themeStyle from '../../assets/styles/theme.style';

const HeaderLeft = (props) => {
    return (
        <TouchableOpacity
            style={{ marginLeft: 15 }}
            onPress={() => { props?.navigation?.goBack() }}>
            <Icon.AntDesign name={"arrowleft"} size={25} color={themeStyle.BUTTON_COLOR} />
        </TouchableOpacity>
    );
};
export default HeaderLeft;