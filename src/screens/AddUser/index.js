import React, { useEffect, useState } from "react"
import { View, Text } from 'react-native'
import { Button, Container, Input } from '../../components'
import commonStyle from "../../assets/styles/common.style"
import { bindActionCreators } from "redux"
import { stateActions } from "../../redux/actions/state"
import { connect } from "react-redux"
import { route } from "../../lib/utils/constants"

function AddUser(props) {
    const [firstName, setFirstName] = useState(props?.route?.params?.data ? props?.route?.params?.data.first_name : "")
    const [lastName, setLastName] = useState(props?.route?.params?.data ? props?.route?.params?.data.last_name : "")
    const [submit, setSubmit] = useState(false)

    const changeText = (key, value) => {
        switch (key) {
            case 'firstName':
                setFirstName(value);
                break;

            case 'lastName':
                setLastName(value);
                break;
        }
    }
    const handleUpdateUser = async () => {
        if (firstName && lastName) {
            let userdata = {
                first_name: firstName,
                last_name: lastName
            }
            await props.stateActions.updateUser(props?.route?.params?.userIndex, userdata);
            // props.navigation.replace(route.USERLIST);
            props.navigation.goBack();
            // props.navigation.push(route.USERLIST);
        } else {
            setSubmit(true)
        }

    }

    const handleAddUser = async () => {
        if (firstName && lastName) {
            let userdata = {
                first_name: firstName,
                last_name: lastName
            }
            await props.stateActions.addUser(userdata);
            console.log(props.users)
            // props.navigation.replace(route.USERLIST);
            props.navigation.goBack();
        } else {
            setSubmit(true)
        }


    }


    return (
        <Container>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Input placeholder="Enter first name" value={firstName} onChangeText={(text) => changeText("firstName", text)} />
                {
                    submit && !firstName && <Text style={commonStyle.errorText}>Please fill this field</Text>
                }
                <Input placeholder="Enter last name" value={lastName} onChangeText={(text) => changeText("lastName", text)} />
                {
                    submit && !lastName && <Text style={commonStyle.errorText}>Please fill this field</Text>
                }
                <View style={{ marginVertical: "10%" }}>
                    <Button title={props?.route?.params?.data ? 'Update User' : 'Add User'} onPress={() => props?.route?.params?.data ? handleUpdateUser() : handleAddUser()} />
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
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);