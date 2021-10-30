import React from 'react';
import { Input as ElementInput } from 'react-native-elements';
import inputStyles from './style';
import THEME from '../../assets/styles/theme.style';

const Input = (props) => {
    return (
        <ElementInput
            {...props}
            ref={props.inputRef}
            labelStyle={inputStyles.labelStyle}
            containerStyle={inputStyles.containerStyle}
            placeholderTextColor={THEME.PRIMARY_TEXT_COLOR}
            inputContainerStyle={{ ...inputStyles.inputContainerStyle, width: props.width ? props.width : null }}
            inputStyle={inputStyles.inputStyle}
        />
    );
}
export default Input;