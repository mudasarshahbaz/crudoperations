import React, { useEffect, useState } from "react"
import { View, Text } from 'react-native'
import { Button, Container, Input } from '../../components'
import commonStyle from "../../assets/styles/common.style"
import { bindActionCreators } from "redux"
import { stateActions } from "../../redux/actions/state"
import { connect } from "react-redux"

function AddUser(props) {
     /**
      * state value which are used in the component
      */
    const [firstName, setFirstName] = useState(props?.route?.params?.data ? props?.route?.params?.data.first_name : "")
    const [lastName, setLastName] = useState(props?.route?.params?.data ? props?.route?.params?.data.last_name : "")
    const [submit, setSubmit] = useState(false)

    /**
    * Change  Input values function with Key value pair
    */
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

    /**
      * Update function which can update the user Details
      */
    const handleUpdateUser = async () => {
        if (firstName && lastName) {
            let userdata = {
                first_name: firstName,
                last_name: lastName
            }
            await props.stateActions.updateUser(props?.route?.params?.userIndex, userdata);
            props.navigation.goBack();
        } else {
            setSubmit(true)
        }

    }

    /**
      * Add function which can add the user Details
      */
    const handleAddUser = async () => {
        if (firstName && lastName) {
            let userdata = {
                first_name: firstName,
                last_name: lastName
            }
            await props.stateActions.addUser(userdata);
            props.navigation.goBack();
        } else {
            setSubmit(true)
        }


    }


    return (
        <Container>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                {/* Input for user details */}
                <Input placeholder="Enter first name" value={firstName} onChangeText={(text) => changeText("firstName", text)} />
                {/* Input value error handling */}
                {
                    submit && !firstName && <Text style={commonStyle.errorText}>Please fill this field</Text>
                }
                {/* Input for user details */}
                <Input placeholder="Enter last name" value={lastName} onChangeText={(text) => changeText("lastName", text)} />
                {/* Input value error handling */}
                {
                    submit && !lastName && <Text style={commonStyle.errorText}>Please fill this field</Text>
                }
                {/* Buttons for performing actions */}
                <View style={{ marginVertical: "10%" }}>
                    <Button title={props?.route?.params?.data ? 'Update User' : 'Add User'} onPress={() => props?.route?.params?.data ? handleUpdateUser() : handleAddUser()} />
                </View>
            </View>
        </Container>
    )
};

/**
 * Binding Redux state to the component props
 */
const mapStateToProps = (state) => {
    return {
        users: state.stateReducer.users
    };
};
/**
 * Binding Redux actions to the component props
 */
const mapDispatchToProps = (dispatch) => {
    return {
        stateActions: bindActionCreators(stateActions, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);