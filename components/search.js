
export default function Search(){
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
            />
          </span>
        </div>
      </div>
    )

}
