import React from 'react'

import Webview from 'react-native-webview';

const RepositoryDetail = (props) => {
    
    const { urlDetail } = props.route.params
    
    return (
        <Webview source={{uri: urlDetail}} />
    )
}

export default RepositoryDetail;