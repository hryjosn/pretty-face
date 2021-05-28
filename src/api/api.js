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
export const callGetAllUserInfo = () => get('user/users');

export const callVerifyAuth = () => post('user/verifyAuth');

export const callVerifyingUser = () => get('user/verifyingUsers');

/** -------------------------- 會員 end -------------------------- */
/** -------------------------- Follower -------------------------- */
// /**
//  * CheckFollower [Get]
//  */
export const callCheckFollower = () => get('follower/check');
// /**
//  * MyFollower [Get]
//  */
export const callGetMyFollower = () => get('follower/myFollower');
// /**
//  * FollowedUser [Get]
//  */
export const callGetIFollowedUser = () => get('follower');
export const callFollowUser = (userId) => post('follower', { userId });
export const callUnFollowUser = (userId) =>
    post('follower/unFollow', { userId });

/** -------------------------- Follower end -------------------------- */

/** -------------------------- Invitation -------------------------- */
// /**
//  * CheckFollower [Get]
//  */
export const callSendInvitation = (postData) => post('invitation', postData);

/** -------------------------- Invitation end -------------------------- */
