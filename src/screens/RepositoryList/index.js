import React, { Component } from "react"
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import themeStyle from "../../assets/styles/theme.style";
import { Container, Icon, Input } from '../../components'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../lib/utils/constants";
import { RespositoriesService } from "../../services";

import { route } from '../../lib/utils/constants';
export default class RepositoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            pageNo: 1,
        }
    }

    handleSeacrhRepositories = () => {
        this.setState({ loading: true })
        RespositoriesService.getRepositories(this.state.searchText, this.state.pageNo)
            .then((res) => { console.log(res.data.items); this.setState({ data: res.data.items, loading: false, refreshing: false }) })
            .catch((error) => console.log(error.response))
    }

    getRepositoriesOnReachEnd = () => {
        RespositoriesService.getRepositories(this.state.searchText, this.state.pageNo)
            .then((res) => {
                console.log(res.data.items);
                let array = [...this.state.data];
                array = [...array, ...res.data.items]
                this.setState({ data: array, loading: false, refreshing: false })
            })
            .catch((error) => console.log(error.response))
    }

    _renderRepository = ({ item, index }) => {

        return (
            <View style={{
                height: 70,
                marginHorizontal: "5%"
            }}>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(route.REPOSITORYDETAIL, {
                        urlDetail: item.html_url
                    })
                    }
                    style={{ flexDirection: "row", alignItems: "center" }}
                >

                    <View style={{ flex: 0.3, flexDirection: 'row', alignItems: "center" }}>
                        <Text style={{ width: 40 }}>
                            {index + 1}
                        </Text>

                        <Image source={{ uri: item?.owner?.avatar_url }} style={{ height: 60, width: 60, borderRadius: 40 }} />
                    </View>

                    <View style={{ flex: 0.6, justifyContent: "center" }}>
                        <Text> {item.name} </Text>
                        <Text> {item?.owner?.login} </Text>
                    </View>

                    <View style={{ flex: 0.1, alignItems: "flex-end", justifyContent: "center" }}>
                        <Icon.FontAwesome name="angle-right" color="#ddd" size={30} />
                    </View>

                </TouchableOpacity>

                <View />
            </View>
        )
    }

    _renderFooter = () => {
        return (
            this.state.refreshing ?
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color={themeStyle.BUTTON_COLOR} size="small" />
                </View>
                : null
        )
    }


    render() {
        return (
            <Container>
                <View style={{ flex: 1, marginTop: "10%" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Input width={SCREEN_WIDTH * 0.8} value={this.state.searchText} placeholder="Seacrh repository" onChangeText={(text) => this.setState({ searchText: text })} />
                        </View>
                        <View style={{ marginHorizontal: "5%" }}>
                            <Icon.FontAwesome name="search" onPress={() => this.state.searchText ? this.handleSeacrhRepositories() : {}} color={themeStyle.BUTTON_COLOR} size={themeStyle.ICON_SIZE} />
                        </View>
                    </View>
                    {this.state.loading ?
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator color={themeStyle.BUTTON_COLOR} size="small" />
                        </View>
                        :
                        <FlatList
                            data={this.state.data}
                            renderItem={this._renderRepository}
                            onEndReached={() => this.setState({ page: this.state.page + 1, refreshing: true }, () => this.getRepositoriesOnReachEnd())}
                            onEndReachedThreshold={0.01}
                            // ListFooterComponent={<ActivityIndicator />}
                            ListFooterComponent={this._renderFooter}
                        />}
                </View>
            </Container>
        )
    }

};