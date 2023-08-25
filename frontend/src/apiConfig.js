const BASE_URL = 'http://localhost'
const PORT_1 = 5000
const PORT_2 = 5010
const PORT_3 = 5020

// USER Service
export const USER_LOGIN_URL = `${BASE_URL}:${PORT_2}/user/login`
export const USER_AUTH_URL = `${BASE_URL}:${PORT_2}/user/auth`
export const REG_URL = `${BASE_URL}:${PORT_2}/user/register`

// POST and IMAGE Service
export const IMG_UPLOAD_URL = `${BASE_URL}:${PORT_1}/image/uploadIMG`
export const CREATE_POST_URL = `${BASE_URL}:${PORT_1}/post/create`
export const ALL_POST_URL = `${BASE_URL}:${PORT_1}/post/all`

// Notification Service
export const ADD_NOTIFICATION_URL = `${BASE_URL}:${PORT_3}/notify/add`
export const ALL_NOTIFICATION_URL = `${BASE_URL}:${PORT_3}/notify`
export const NOTFICATION_READ_URL = `${BASE_URL}:${PORT_3}/notify/markAsRead`