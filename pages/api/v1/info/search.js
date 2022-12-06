import path from 'path';
import { promises as fs } from 'fs';

export default async function Search(req, res) {
    const { q } = req.query
    console.log("q", q)

    const indexLoc = path.join(process.cwd(), 'servicesInfo') + '/searchIndex.json'
    const fileContent = await fs.readFile(indexLoc, 'utf-8')

    const all_services = JSON.parse(fileContent).services

    if (q === undefined ) {
        return res.status(200).json(all_services)
    }

    const responseJson = all_services.filter((serviceInfo) => {
        let serviceStr = `${serviceInfo.name} ${serviceInfo.org} ${serviceInfo.description}`
        serviceStr = serviceStr.toLowerCase()

        return serviceStr.search((q).toLowerCase()) === -1 ? false : true
    })

    return res.status(200).json(responseJson)
}
