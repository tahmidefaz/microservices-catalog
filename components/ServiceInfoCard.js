

export default function ServiceInfoCard({serviceInfo, setModalOpen, setModalData}) {
    
    const onClickHandler = () => {
        setModalData(serviceInfo)
        setModalOpen(true)
    }

    return (
        <>
            <div class="pf-c-card" onClick={() => onClickHandler()} style={{cursor: 'pointer'}}>
                <div class="pf-c-card__title">{serviceInfo.name}</div>
                <div class="pf-c-card__body">{serviceInfo.org}</div>
            </div>
        </>
    )
}
