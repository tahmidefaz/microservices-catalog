const fs = require('fs');
const yaml = require('js-yaml');
const glob = require("glob");


function fetchYamlInfo(filepath) {
    const orgName = filepath.match(/\/(.*)\//)[1]
    const fileData = fs.readFileSync(filepath, 'utf-8');
    const fileInfo = yaml.load(fileData);

    const serviceInfo = {
        name: fileInfo.service_name,
        org: orgName,
        description: fileInfo.description,
        onboarding_doc: fileInfo.onboarding_doc,
    }

    return serviceInfo
}


const orgDirName = glob.sync("orgInfo/*/*.yml");

const services = [];
const orgsSet = new Set();

orgDirName.forEach((filepath) => {
    const serviceInfo = fetchYamlInfo(filepath);
    services.push(serviceInfo);
    orgsSet.add(serviceInfo.org)
})

const orgs = Array.from(orgsSet).map((org) => {
    return {name: org}
});


const index = {
    "orgs": orgs,
    "services": services,
}

fs.writeFileSync('servicesInfo/searchIndex.json', JSON.stringify(index), 'utf-8');

console.log(index);
