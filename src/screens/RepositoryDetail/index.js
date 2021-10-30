import React from 'react'

import Webview from 'react-native-webview';

/**
 * Function that returns a webview of the repository
 */
const RepositoryDetail = (props) => {

    const { urlDetail } = props.route.params

    return (
        /**
         *  Webview of the repository from url 
         */
        <Webview source={{ uri: urlDetail }} />
    )
}

export default RepositoryDetail;