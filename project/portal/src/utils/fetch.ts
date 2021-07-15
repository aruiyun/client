import axios from 'axios'
import { message } from 'antd'
import { AxiosRequestConfig } from 'axios'

export function getApiPath() {
    const absPath = import.meta.env.DEV
        ? 'http://liuarui.free.idcfengye.com/'
        : location.origin
    return absPath
}
const service = axios.create({
    baseURL: getApiPath(),
    timeout: 100000,
})

// 禁用withCredentials 原因
// https://blog.csdn.net/chjj0904/article/details/90268813
// axios.defaults.withCredentials = true

service.interceptors.request.use(
    (config) => {
        config.headers['Access-Control-Allow-Credentials'] = true
        config.headers['Content-Type'] = 'application/json'
        if (
            config.method === 'post' &&
            config.headers['Content-Type'] !== 'application/json'
        ) {
            config.data = JSON.stringify(config.data)
        }
        return config
    },
    (error) => {
        console.log(error)
        // message.error(`Request Error: ${JSON.stringify(error.message)}`)
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        const res = response.data
        if (res.CODE !== '00') {
            throw new Error(JSON.stringify(res))
        }
        return res
    },
    (error) => {
        console.log('err', error)
        // message.error(JSON.stringify(error.message))
        return Promise.reject(error)
    }
)
type resData = {
    CODE: string
    DATA: any
    MSG: string
}
export const fetch = (param: AxiosRequestConfig): Promise<resData> => {
    return service({
        ...param,
    }) as unknown as Promise<resData>
}
