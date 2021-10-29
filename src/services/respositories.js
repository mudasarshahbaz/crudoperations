import axiosInstance from './Interceptor';

const Api = {
    getRepositories: function (repositorySearch,per_page) {
        return axiosInstance.get(`repositories?q=${repositorySearch}&sort=help-wanted-issues&order=desc&page=1&per_page=${per_page}}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            }
        })
    },

};

export default Api;