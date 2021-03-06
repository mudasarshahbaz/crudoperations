import React, { Component } from "react"
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image, StyleSheet } from 'react-native'
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

    /**
     * Function that returns repository list 
     * accordingly to the text which is enter in the search bar
     */

    handleSeacrhRepositories = () => {
        this.setState({ loading: true })
        RespositoriesService.getRepositories(this.state.searchText, this.state.pageNo)
            .then((res) => { this.setState({ data: res.data.items, loading: false, refreshing: false }) })
            .catch((error) => console.log(error.response))
    }
    /**
     * Function that returns repository list 
     * accordingly to the list end reached fetch more record 
     */
    getRepositoriesOnReachEnd = () => {
        RespositoriesService.getRepositories(this.state.searchText, this.state.pageNo)
            .then((res) => {
                let array = [...this.state.data];
                array = [...array, ...res.data.items]
                this.setState({ data: array, loading: false, refreshing: false })
            })
            .catch((error) => console.log(error.response))
    }

    /**
    * Function that returns repository list item View
    * and further navigate to the repository detail screen 
    */

    _renderRepository = ({ item, index }) => {
        return (
            <View style={styles.itemContainer}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(route.REPOSITORYDETAIL, { urlDetail: item.html_url })}
                    style={styles.itemInnerContainer} >
                    <View style={styles.imageContainer}>
                        <Text style={{ width: 40 }}>
                            {index + 1}
                        </Text>
                        <Image source={{ uri: item?.owner?.avatar_url }} style={{ height: 60, width: 60, borderRadius: 40 }} />
                    </View>
                    <View style={{ flex: 0.6, justifyContent: "center" }}>
                        <Text> {item.name} </Text>
                        <Text> {item?.owner?.login} </Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Icon.FontAwesome name="angle-right" color="#ddd" size={30} />
                    </View>
                </TouchableOpacity>
                <View />
            </View>
        )
    }

    /**
* Function that returns repository list footer View
* if it reaches the end then show loading for fetch more records 
*/

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
                <View style={styles.container}>
                    { /**
                         * Search Bar for seacrh repositories by click on search icon 
                         */}
                    <View style={styles.searchContainer}>
                        <View>
                            <Input width={SCREEN_WIDTH * 0.8} value={this.state.searchText} placeholder="Seacrh repository" onChangeText={(text) => this.setState({ searchText: text })} />
                        </View>
                        <View style={{ marginHorizontal: "5%" }}>
                            <Icon.FontAwesome name="search" onPress={() => this.state.searchText ? this.handleSeacrhRepositories() : {}} color={themeStyle.BUTTON_COLOR} size={themeStyle.ICON_SIZE} />
                        </View>
                    </View>

                    { /**
                         * Loading and List of repositories
                         */}
                    {this.state.loading ?
                        <View style={styles.loadingContainer}>
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

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: "10%" },
    searchContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: "5%" },
    loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    itemContainer: { height: 70, marginHorizontal: "5%" },
    itemInnerContainer: { flexDirection: "row", alignItems: "center" },
    iconContainer: { flex: 0.1, alignItems: "flex-end", justifyContent: "center" },
    imageContainer: { flex: 0.3, flexDirection: 'row', alignItems: "center" }
})