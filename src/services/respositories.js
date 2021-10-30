import axiosInstance from './Interceptor';

const Api = {
    /**
     * fetch Repositories from github API Integrated
     */
    getRepositories: function (repositorySearch, pageNo) {
        return axiosInstance.get(`repositories?q=${repositorySearch}&sort=help-wanted-issues&order=desc&page=${pageNo}&per_page=10`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json',
                'my_client_id': 'd2888897070f73ef63d8',
                'my_client_secret': '06ec0a1602b8a32b34a6049cf25fcf36c1639b11'
                // 'Authorization':"token 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"
            }
        })
    },

};

export default Api;