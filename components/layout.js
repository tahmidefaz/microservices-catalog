import { useState } from "react";

import Flow from "./Flow";
import Header from "./header";
import Search from "./search";
import ServiceInfoModal from "../components/ServiceInfoModal";


export default function Layout(){
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [serviceModalData, setServiceModalData] = useState({name: "", org: "", description: "", onboarding_doc: ""})

  return(
    <div className="pf-l-grid">
      <div className="pf-l-grid__item pf-m-12-col" id="title">
        <Header />
      </div>
      <div className="pf-l-grid__item pf-m-10-col">
        <div style={{width: "78vw", height: "80vh"}}>
          <Flow setServiceModalOpen={setIsModalOpen} setServiceModalData={setServiceModalData}/>
        </div>
      </div>
      <div className="pf-l-grid__item pf-m-2-col"><Search/></div>
      <ServiceInfoModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} serviceInfoData={serviceModalData} />
    </div>
  );
}
