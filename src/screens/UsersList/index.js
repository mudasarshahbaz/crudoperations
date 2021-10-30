import React, { useEffect, useState } from "react"
import { View, Text, FlatList, Alert } from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import themeStyle from "../../assets/styles/theme.style";
import { Button, Container, Icon } from '../../components'
import { route } from '../../lib/utils/constants';
import { VerticalSpacer } from '../../lib/utils/global';
import { stateActions } from "../../redux/actions/state";
import { useIsFocused } from "@react-navigation/native";
function UsersList(props) {
    const isFocused = useIsFocused();
    useEffect(() => {}, [isFocused]);
    const _renderItems = ({ item, index }) => {
        return (
            <View style={{ flexDirection: "row", marginHorizontal: "10%", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text>{item.first_name} {item.last_name}</Text>
                </View>
                <View>
                    <Icon.FontAwesome5 onPress={() => props.navigation.navigate(route.ADDUSER, { data: item, userIndex: index })} name="user-edit" size={themeStyle.ICON_SIZE} />
                    <VerticalSpacer />
                    <Icon.MaterialCommunityIcons onPress={() => deletePress(index)} name="delete" size={themeStyle.ICON_SIZE} />
                </View>
            </View>

        )
    }

    const deletePress = (index) => {
        Alert.alert('Confirmation!', 'Are you sure you want to delete this user?', [
            {
                text: "Cancel",
                onPress: () => { },
                style: "cancel"
            },
            { text: "OK", onPress: () => handleDeleteUser(index) }
        ])
    }

    const handleDeleteUser = async (index) => {
        await props.stateActions.removeUser(index);
    }

    const _renderEmptyView = () => {
        return (
            !props.users.length ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>No record found!</Text></View>
                : null
        )
    }

    return (
        <Container>
            <View style={{ flex: 1, }}>
                <View style={{ marginVertical: "10%", alignSelf: "center" }}>
                    <Button title="Add User" onPress={() => props.navigation.navigate(route.ADDUSER)} />
                </View>
                <View >
                    <FlatList
                        data={props.users}
                        renderItem={_renderItems}
                        ItemSeparatorComponent={(VerticalSpacer)}
                        ListHeaderComponent={_renderEmptyView}
                    />
                </View>
            </View>
        </Container>
    )
};

const mapStateToProps = (state) => {
    return {
        users: state.stateReducer.users
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        stateActions: bindActionCreators(stateActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);