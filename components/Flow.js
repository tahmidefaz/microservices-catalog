import { useEffect, useMemo, useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

import { GetAllOrgs, GetOrgService } from '../misc/datafetch';
import OrgNode from './OrgNode';
import ServiceNode from './ServiceNode';


// const edges = [{ id: '1-2', source: '1', target: '2', label: 'something'}];


function Flow() {
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])

    const nodeTypes = useMemo(() => ({ orgNode: OrgNode, serviceNode: ServiceNode }), []);

    const orgNodeHandler = async (orgName) => {
        console.log("clicked...", orgName)
        const orgServices = await GetOrgService(orgName)
        
        console.log("org services...", orgServices)

        const servicesNodeArr = orgServices.map((service, i) => {
            return {id: `${orgName}_${service.name}`, type: 'serviceNode', position: {x: 50+i*200, y: 50*3}, data: { name: service.name, orgName: service.org }}
        })

        const servicesEdges = orgServices.map((service, i) => {
            console.log("org...", `${orgName}_${service.name}_edge`)
            return { id: `${orgName}_${service.name}_edge`, source: orgName, target: `${orgName}_${service.name}`, sourceHandle: "a"}
        })

        setNodes(currNodes => [...currNodes, ...servicesNodeArr])
        setEdges(currEdges => [...currEdges, ...servicesEdges])
        console.log("nodes...", nodes)
    }

    useEffect(() => {
        const all_orgs = GetAllOrgs()
            .then((data) => {
                const nodeArr = data.map((org, i) => {
                    return {id: `${org.name}`, type: 'orgNode', position: {x: 300+i*200, y: 50}, data: { name: org.name, handler: orgNodeHandler }}
                });
                setNodes(nodeArr);
            });
    }, [])

    return (
        <div style={{ height: '90vh' }}>
        <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges}>
            <Background />
            <Controls />
        </ReactFlow>
        </div>
    );
}

export default Flow;
