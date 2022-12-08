import path from 'path';
import { promises as fs } from 'fs';

export default async function Orgs(req, res) {
    const { org, service } = req.query

    const indexLoc = path.join(process.cwd(), 'servicesInfo') + '/searchIndex.json'
    const fileContent = await fs.readFile(indexLoc, 'utf-8')

    const all_services = JSON.parse(fileContent).services

    if (org === undefined && service === undefined) {
        return res.status(200).json(all_services)
    }

    if (org !== undefined && service === undefined) {
        const responseJson = all_services.filter(serviceInfo => (serviceInfo.org).toLowerCase() === (org).toLowerCase())
        return res.status(200).json(responseJson)
    }

    if (org === undefined && service !== undefined) {
        const responseJson = all_services.filter(serviceInfo => (serviceInfo.name).toLowerCase() === (service).toLowerCase())
        return res.status(200).json(responseJson)
    }

    const responseJson = all_services.filter((serviceInfo) => {
        return (serviceInfo.name).toLowerCase() === (service).toLowerCase() && (serviceInfo.org).toLowerCase() === (org).toLowerCase()
    })

    return res.status(200).json(responseJson)
}
