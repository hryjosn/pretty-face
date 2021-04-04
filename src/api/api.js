import { post, get } from './restAPI';
import axios from 'axios';
import { API_URL } from '@env';

const endPoint = API_URL;
const request = axios.create({
    baseURL: endPoint,
});
const formPost = (url, formData) =>
    axios({
        method: 'post',
        url: API_URL + url,
        data: formData,
        headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        },
    });
/** -------------------------- 會員 -------------------------- */
/**
 * 會員登入 [POST]
 */
export const callLoginUser = (postData) => request.post('user/login', postData);

/**
 * 會員註冊 [POST]
 */
export const callSignUpUser = (postData) => formPost('user', postData);

/**
 * 取得會員資料 [Get]
 */
export const callGetUserInfo = (postData) => get('user/info');
/**
 * 取得會員資料 [Get]
 */
export const callGetAllUserInfo = (postData) => get('user/users');

/** -------------------------- 會員 end -------------------------- */
/** -------------------------- 餐廳 -------------------------- */
// /**
//  * 會員登入 [POST]
//  */
export const callGetInvitationList = (postData) => get('invitation', postData);

/** -------------------------- 餐廳 end -------------------------- */
