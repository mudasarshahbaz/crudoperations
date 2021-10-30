import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const screen = {
    SCREEN_TITLE_ALIGN_CENTER: "center",
    REPOSITORYLIST: "Repository List",
    REPOSITORYDETAIL:"Repository Detail",
    USERLIST: "User List",
    ADDUSER: "Add User",
};

const route = {
    MAIN: "Main",
    REPOSITORYLIST: "RepositoryList",
    USERLIST: "UserList",
    ADDUSER: "AddUser",
    REPOSITORYDETAIL: "RepositoryDetail"
}


export {
    screen,
    route,
    SCREEN_HEIGHT,
    SCREEN_WIDTH
}