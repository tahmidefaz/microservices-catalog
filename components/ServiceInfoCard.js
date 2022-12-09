
import styles from '../styles/Home.module.css'

export default function ServiceInfoCard({serviceInfo, setModalOpen, setModalData}) {
    const onClickHandler = () => {
        setModalData(serviceInfo)
        setModalOpen(true)
    }

    return (
        <>
            <div className="pf-c-card serviceInfoCard" onClick={() => onClickHandler()}>
                <div className="pf-c-card__title">{serviceInfo.name}</div>
                <div className="pf-c-card__body">{serviceInfo.org}</div>
            </div>
        </>
    )
}
