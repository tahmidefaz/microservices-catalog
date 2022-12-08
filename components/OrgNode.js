import { Handle, Position } from 'reactflow';

import styles from '../styles/NodeStyles.module.css'

const handleStyle = { left: 10 };

export default function OrgNode({ data }) {
    return (
        <div onClick={()=> data.handler(data.name)} className={styles.orgNode}>
            <div>
                {data.name}
            </div>
            <div className={styles.subHeading}>
                organization
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
        </div>
    );
}
