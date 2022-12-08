
export function GetAllOrgs() {
    return fetch('api/v1/info/orgs').then(response => response.json())
}


export function GetOrgService(orgName) {
    const url = `api/v1/info/services?org=${orgName}`

    return fetch(url).then(response => response.json())
}
