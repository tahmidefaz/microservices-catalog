
import styles from '../styles/ServiceInfoModal.module.css'


export default function ServieInfoModal({ isOpen, setIsOpen, serviceInfoData }) {
    return (
        <>
            { isOpen && <div className={styles.modalBackground}>
                <div
                    class="pf-c-modal-box pf-m-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-sm-title"
                    aria-describedby="modal-sm-description"
                >
                        <button
                            class="pf-c-button pf-m-plain"
                            type="button"
                            aria-label="Close dialog"
                        >
                            <i class="fas fa-times" aria-hidden="true"></i>
                        </button>
                        <header class="pf-c-modal-box__header">
                            <h1 class="pf-c-modal-box__title" id="modal-sm-title">Modal title</h1>
                        </header>
                        <div class="pf-c-modal-box__body" id="modal-sm-description">
                            Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </div>
                        <footer class="pf-c-modal-box__footer">Modal footer</footer>
                    </div>
                </div>
            }
        </>
    )
}