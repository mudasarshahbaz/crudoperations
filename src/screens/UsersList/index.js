import React from "react"
import { View, Text, FlatList, Alert } from 'react-native'
import { connect } from "react-redux";
import themeStyle from "../../assets/styles/theme.style";
import { Button, Container, Icon } from '../../components'
import { route } from '../../lib/utils/constants';
import { VerticalSpacer } from '../../lib/utils/global';

function UsersList(props) {



    const _renderItems = ({ item, index }) => {
        return (
            <View style={{ flexDirection: "row" }}>
                <View>
                    <Text>{item.first_name} {item.last_name}</Text>
                </View>
                <View>
                    <Icon.FontAwesome5 onPress={() => props.navigation.navigate(route.ADDUSER, { data: item })} name="user-edit" size={themeStyle.ICON_SIZE} />
                    <Icon.MaterialCommunityIcons onPress={() => deletePress} name="delete" size={themeStyle.ICON_SIZE} />
                </View>
            </View>

        )
    }

    const deletePress = () => {
        Alert.alert('Confirmation', 'Are you sure you want to delete this user', [
            {
                text: "Cancel",
                onPress: () => { },
                style: "cancel"
            },
            { text: "OK", onPress: () => handleDeleteUser() }
        ])
    }

    const handleDeleteUser = () => {

    }

    const _renderEmptyView = () => {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>No record found!</Text></View>
        )
    }

    return (
        <Container>
            <View style={{ flex: 1, }}>
                <View style={{ marginVertical: "10%", alignSelf: "center" }}>
                    <Button title="Add User" onPress={() => props.navigation.navigate(route.ADDUSER)} />
                </View>
                <View>
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
export default connect(mapStateToProps)(UsersList);