export const getToken = () => {
    return window.localStorage.getItem('myToken')
};

export const saveToken = (token) => {
    return window.localStorage.setItem('myToken', token)
};

export const destroyToken = () => {
    return window.localStorage.removeItem('myToken')
};

export default {getToken, saveToken, destroyToken}