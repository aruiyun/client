import { createReportItem } from '../api/common'

export const reportInfo = (scene: string, ext?: any) => {
    createReportItem({
        userAgent: navigator.userAgent,
        scene: scene,
        timeStamp: `${Date.now()}`,
        ext: JSON.stringify(ext),
    })
}
