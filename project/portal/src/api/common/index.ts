import { fetch } from '../../utils/fetch'

export function fetchReportList() {
    return fetch({
        method: 'GET',
        url: '/report',
    })
}

export function createReportItem(data: {
    userAgent: string
    timeStamp: string
    scene: string
    ext?: string
}) {
    return fetch({
        method: 'POST',
        data,
        url: '/report',
    })
}
