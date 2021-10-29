import React from 'react';
import { View } from "react-native";

/**
 * Return Object After Parsing
 *  @param data
 */
export const ParseTheData = (data) => {
    return JSON.parse(data);
}

/**
 * Return Object After stringify
 *  @param data
 */
 export const StringifyTheData = (data) => {
    return JSON.stringify(data);
}

/**
 * Return Vertical Space of 10 Px
 */
export const VerticalSpacer = () => {
    return (<View style={{ height: 10 }}></View>)
}
/**
 * Return Horizontal Space of 10 Px
 */
export const HorizontalSpacer = () => {
    return (<View style={{ width: 10 }}></View>)
}

/**
 * Return True if email enter is correct
 * @param email
 */
export const isEmailValid = (email) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
/**
 * Return True if password has one capital one lower one number and one special and length must greater or equal to 8
 * @param password
 */
export const isPasswordValid = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_])(?=.{8,})/.test(password)
}

/**
 * Return True if email enter is correct
 * @param phone
 */
export const isPhoneValid = (phone) => {
    return /^\+(?:[0-9]●?){6,14}[0-9]$/.test(phone)
}
