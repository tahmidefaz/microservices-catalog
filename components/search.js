import { useRef, useState, useEffect } from "react"

import ServiceInfoCard from "./ServiceInfoCard"
import styles from '../styles/Home.module.css'


export default function Search({ setModalOpen, setModalData }){

    const searchRef = useRef(null)
    const [results,setResults] = useState([])

    const searchEndpoint = (query) => `/api/v1/info/search?q=${query}`

    const onEnterPressHandler = () => {
      const query = searchRef.current.value

      fetch(searchEndpoint(query))
        .then(res=>res.json())
        .then(res=>{
          setResults(res)
      })
      return
    }

    useEffect(()=>{
      fetch(searchEndpoint(""))
        .then(res=>res.json())
        .then(res=>{
          setResults(res)
      })
    }, [])


    return (
      <div>
        <div className="pf-c-search-input" id="input-box" style={{background: 'rgb(240, 237, 232)'}}>
        <div className="pf-c-search-input__bar">
          <span className="pf-c-search-input__text">
            <span className="pf-c-search-input__icon">
              <i className="fas fa-search fa-fw" aria-hidden="true"></i>
            </span>
            <input
              className="pf-c-search-input__text-input"
              type="text"
              placeholder="Find by name"
              aria-label="Find by name"
              ref={searchRef}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  onEnterPressHandler()
                }
              }}
            />
            </span>
          </div>
        </div>
        <div className={styles.searchResults}>
          {
            results && results.map((service, i) => <ServiceInfoCard key={`serviceinfocard_${i}`} serviceInfo={service} setModalOpen={setModalOpen} setModalData={setModalData}/>)
          }
        </div>
      </div>
    )

}
