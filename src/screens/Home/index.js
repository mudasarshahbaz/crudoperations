import React, { Component } from "react"
import { View, Text } from 'react-native'
import { Container, Button } from '../../components'
import { route } from '../../lib/utils/constants';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View>
                        <Button title={'Users'} onPress={() => this.props.navigation.navigate(route.USERLIST)} />
                    </View>
                    <View>
                        <Button title={'Repositories'} onPress={() => this.props.navigation.navigate(route.USERLIST)} />
                    </View>
                </View>
            </Container>
        )
    }
};