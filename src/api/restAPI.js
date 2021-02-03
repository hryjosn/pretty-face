import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

const apiUrl = API_URL;
export const post = async (url, data, debug = false, timeout = 6000) => {
    const token = await AsyncStorage.getItem('token');
    return axios({
        method: 'POST',
        url: apiUrl + url,
        data: data, // post Data
        timeout: timeout, // timeout
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json;',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            // const hasToken = !!response.headers.authorization;
            // if (hasToken && process.browser) {
            //     // console.log('have token')
            //     // console.log(response.headers.authorization)
            //     refreshToken(response.headers.authorization);
            // }
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
                console.log(response.data);
            }
            if (response.status !== 200) {
                return response
            }
            return response.data;
        })
        .catch((e) => {
            catchError(e);
            return e;
        });
};
export const get = async (url, debug = false, timeout = 6000) => {
    const token = await AsyncStorage.getItem('token');
    return axios({
        method: 'GET',
        url: apiUrl + url,
        timeout: timeout, // timeout
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            Accept: 'application/json;',
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            if (response && debug) {
                console.log(`------------------res:${url}------------------`);
                console.log(response.data);
            }
            if (response.status !== 200) {
                return response
            }
            return response.data;
        })
        .catch((e) => {
            catchError(e);
            return e;
        });
};
const catchError = async (e) => {
    if (e?.response?.status === 401) {
        const asyncStorageKeys = await AsyncStorage.getAllKeys();
        if (asyncStorageKeys.length > 0) {
            AsyncStorage.clear();
        }
        Actions.replace('Auth');
    }
};
