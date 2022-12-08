import { Handle, Position } from 'reactflow';

import styles from '../styles/NodeStyles.module.css'


export default function ServiceNode({ data }) {
    return (
        <div className={styles.serviceNode}>
            <Handle type="target" position={Position.Top} id="b" />
            <div>
                {data.name}
            </div>
            <div className={styles.subHeading}>
                service
            </div>
        </div>
    );
}
