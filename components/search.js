import { useCallback,useRef,useState } from "react"
import Link from "next/link"

export default function Search(){

  const searchRef = useRef(null)
  const [query,setQuery] = useState('')
  const [active,setActive] = useState(false)
  const [results,setResults] = useState([])

  const searchEndpoint = (query) => `/api/v1/info/search?q=${query}`

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query)
    if (query.length){
      fetch(searchEndpoint(query))
      .then(res=>res.json())
      .then(res=>{
        setResults(res.results)
      })
    } else{
      setResults([])
    }
  },[])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click',onClick)
  },[])

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)){
      setActive(false)
      window.removeEventListener('click',onClick)
    }
  },[])


  return (
        <div class="pf-c-search-input" id="input-box">
        <div class="pf-c-search-input__bar">
          <span class="pf-c-search-input__text">
            <span class="pf-c-search-input__icon">
              <i class="fas fa-search fa-fw" aria-hidden="true"></i>
            </span>
            <input
              class="pf-c-search-input__text-input"
              type="text"
              placeholder="Find by name"
              aria-label="Find by name"
              onChange={onChange}
              onFocus={onFocus}
              value={query}
            />
          </span>
        </div>
        { active && results.length>0 && (
          <ul className="search-results">
            {results.map(({})=>
            <li className="list-results" key={id}>
              <Link href="/services/[id]" as={`/services/${id}`}></Link>
              <a>{title}</a>
            </li>)}
          </ul>
        )}
      </div>
    )

}
