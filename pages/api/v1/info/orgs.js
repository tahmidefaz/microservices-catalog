import path from 'path';
import { promises as fs } from 'fs';

export default async function Orgs(req, res) {
    const indexLoc = path.join(process.cwd(), 'servicesInfo') + '/searchIndex.json'
    const fileContent = await fs.readFile(indexLoc, 'utf-8')

    const all_orgs = JSON.parse(fileContent).orgs

    res.status(200).json(all_orgs)
}
