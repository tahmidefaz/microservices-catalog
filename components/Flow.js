import { useEffect, useMemo, useState } from 'react';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';

import { GetAllOrgs, GetOrgService } from '../misc/datafetch';
import OrgNode from './OrgNode';
import ServiceNode from './ServiceNode';


// const edges = [{ id: '1-2', source: '1', target: '2', label: 'something'}];


function Flow({ setServiceModalOpen, setServiceModalData}) {
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])
    const [level, setLevel] = useState(1)
    const [activeOrgs, setActiveOrgs] = useState([])

    const [orgServToLoad, setOrgServToLoad] = useState('')

    const nodeTypes = useMemo(() => ({ orgNode: OrgNode, serviceNode: ServiceNode }), []);

    const orgNodeHandler = (orgName) => {
        setOrgServToLoad(orgName)
    }

    const serviceNodeHandler = (serviceInfo) => {
        setServiceModalData(serviceInfo)
        setServiceModalOpen(true)
    }


    useEffect(() => {
        orgServToLoad !== '' &&
        GetOrgService(orgServToLoad)
            .then((orgServices) => {
                if (activeOrgs.includes(orgServToLoad)) {
                    setNodes((currNodes) => currNodes.filter(node => !(node.id).includes(`${orgServToLoad}_`)))
                    setEdges((currEdges) => currEdges.filter(edge => !(edge.id).includes(`${orgServToLoad}_`)))
                    setActiveOrgs(currActiveOrgs => currActiveOrgs.filter(org => org !== orgServToLoad))
                    setLevel(currLevel => currLevel -1)
                    setOrgServToLoad('')
                    return
                };

                const orgName = orgServToLoad

                const servicesNodeArr = orgServices.map((service, i) => {
                    return {id: `${orgName}_${service.name}`, type: 'serviceNode', position: {x: 50+i*200, y: 50*3*level}, data: { serviceInfo: service, handler: serviceNodeHandler }}
                })

                const servicesEdges = orgServices.map((service, i) => {
                    return { id: `${orgName}_${service.name}_edge`, source: orgName, target: `${orgName}_${service.name}`, sourceHandle: "a"}
                })

                setLevel(currLevel => currLevel+1)
                setNodes(currNodes => [...currNodes, ...servicesNodeArr])
                setEdges(currEdges => [...currEdges, ...servicesEdges])
                setActiveOrgs(currActiveOrgs => [...currActiveOrgs, orgServToLoad])

                setOrgServToLoad('')
            })
    }, [orgServToLoad])

    useEffect(() => {
        const all_orgs = GetAllOrgs()
            .then((data) => {
                const nodeArr = data.map((org, i) => {
                    return {id: `${org.name}`, type: 'orgNode', position: {x: 300+i*200, y: 50*level}, data: { name: org.name, handler: orgNodeHandler }}
                });
                setNodes(nodeArr);
            });
    }, [])

    return (
        <div style={{ height: '100%' }}>
        <ReactFlow nodeTypes={nodeTypes} nodes={nodes} edges={edges}>
            <Background />
            <Controls />
        </ReactFlow>
        </div>
    );
}

export default Flow;
