import Header from "./header";
import Search from "./search";

export default function Layout(){
    return(
        <div class="pf-l-grid">
  <div class="pf-l-grid__item pf-m-12-col" id="title">
    <Header />
  </div>
  <div class="pf-l-grid__item pf-m-10-col">
    <p class="pf-c-content" id="text">Graphs and orgs</p>
  </div>
  <div class="pf-l-grid__item pf-m-2-col"><Search /></div>
</div>
    );
}
