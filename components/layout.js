import { useState } from "react";

import Flow from "./Flow";
import Header from "./header";
import Search from "./search";
import ServiceInfoModal from "../components/ServiceInfoModal";

import styles from "../styles/Home.module.css"


export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [serviceModalData, setServiceModalData] = useState({name: "", org: "", description: "", onboarding_doc: ""})

  return(
      <div className={styles.appContainer}>
        <div className={styles.headerBar}>
          <Header/>
        </div>
        <div className={styles.appContent}>
          <div className={styles.flowContainer}>
            <Flow setServiceModalOpen={setIsModalOpen} setServiceModalData={setServiceModalData}/>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.searchInput}>
              <Search/>
            </div>
            <div className={styles.searchResults}>Search Result</div>
          </div>
        </div>
        <ServiceInfoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} serviceInfoData={serviceModalData} />
      </div>
  )
}