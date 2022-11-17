import '/css/components/search-result.css';

class SearchResultProfile extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const img = this.getAttribute('result-img') || '';
        const name = this.getAttribute('result-name');
        const position = this.getAttribute('result-position');
        const state = this.getAttribute('result-state');
        const party = this.getAttribute('result-party');

        const link = this.getAttribute('result-link');

        this.innerHTML = `
    <div class="search-result">
      <div class="search-result__info">
        <div class="search-result__info-img"><img src="${img}" alt="${name}" /></div>
        <div class="search-result__info-content">
          <div class="search-result__info-name"><span>${name}</span></div>
          <div class="search-result__info-position"><span>${position}</span></div>
          <div class="search-result__info-state"><span>${state}</span></div>
          <div class="search-result__info-party"><span>${party}</span></div>
        </div>
      </div>
  
      <div class="search-result__btn">
        <custom-btn bLink="${link}" bText="See More"></custom-btn>
      </div>
    </div>
    `;
    }
}

customElements.define('search-result-profile', SearchResultProfile);