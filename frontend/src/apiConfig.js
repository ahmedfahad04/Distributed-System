const BASE_URL = 'http://localhost'
// const PORT_1 = 5000
// const PORT_2 = 5010
// const PORT_3 = 5020

// POST and IMAGE Service
export const IMG_UPLOAD_URL = `${BASE_URL}/post/uploadIMG`
export const CREATE_POST_URL = `${BASE_URL}/post/create`
export const ALL_POST_URL = `${BASE_URL}/post/all`

// USER Service
export const USER_LOGIN_URL = `${BASE_URL}/user/login`
export const USER_AUTH_URL = `${BASE_URL}/user/auth`
export const REG_URL = `${BASE_URL}/user/register`

// Notification Service
export const ADD_NOTIFICATION_URL = `${BASE_URL}/notify/add`
export const ALL_NOTIFICATION_URL = `${BASE_URL}/notify`
export const NOTFICATION_READ_URL = `${BASE_URL}/notify/markAsRead`