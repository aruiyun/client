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
    withCredentials: true,
})

service.interceptors.request.use(
    (config) => {
        config.headers['requestType'] = 'ajax'
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
        message.error(`Request Error: ${JSON.stringify(error)}`)
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
        message.error(JSON.stringify(error))
        return Promise.reject(error)
    }
)

export const fetch = (param: AxiosRequestConfig) => {
    return service({
        ...param,
    })
}
