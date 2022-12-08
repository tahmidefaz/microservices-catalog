import Link from 'next/link'

import styles from '../styles/ServiceInfoModal.module.css'


export default function ServieInfoModal({ isOpen, setIsOpen, serviceInfoData }) {
    return (
        <>
            { isOpen && <div className={styles.modalBackground}>
                <div
                    className="pf-c-modal-box pf-m-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-sm-title"
                    aria-describedby="modal-sm-description"
                >
                        <button
                            className="pf-c-button pf-m-plain"
                            type="button"
                            aria-label="Close dialog"
                            onClick={() => setIsOpen(false)}
                        >
                            <i className="fas fa-times" aria-hidden="true"></i>
                        </button>
                        <header className="pf-c-modal-box__header">
                            <h1 className="pf-c-modal-box__title" id="modal-sm-title">{serviceInfoData.name}</h1>
                            <h4 className="pf_c-modal__title" id="modal-sm-subtitle">{serviceInfoData.org}</h4>
                        </header>
                        <div className="pf-c-modal-box__body" id="modal-sm-description">
                            {serviceInfoData.description}
                        </div>
                        <footer className="pf-c-modal-box__footer"><Link href={serviceInfoData.onboarding_doc} target="_blank">Onboarding Doc</Link></footer>
                    </div>
                </div>
            }
        </>
    )
}