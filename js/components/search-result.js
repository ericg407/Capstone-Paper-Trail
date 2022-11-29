import '/css/components/search-result.css';

class SearchResult extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const img = this.getAttribute('result-img') || '';
    const name = this.getAttribute('result-name');
    const position = this.getAttribute('result-position');
    const state = this.getAttribute('result-state');
    const party = this.getAttribute('result-party');

    const contrib = this.getAttribute('result-contrib') || '0';

    const link = this.getAttribute('result-link');

    this.innerHTML = `
    <div class="search-result">
      <div class="search-result__info">
        <div class="search-result__info-img"><img src="${img}" alt="${name}" onerror="this.src='/user-icon.jpg'" /></div>
        <div class="search-result__info-content">
          <div class="search-result__info-name"><span>${name}</span></div>
          <div class="search-result__info-position">Chamber: <span>${position}</span></div>
          <div class="search-result__info-state">State: <span>${state}</span></div>
          <div class="search-result__info-party">Party: <span>${party}</span></div>
        </div>
      </div>

      <div class="search-result__contents">
        <div class="search-result__contribs">
          <div class="search-result__contribs-title">
            <span>Total Contributions Received</span>
          </div>

          <div class="search-result__contribs-content">
            <span>${contrib}</span>
          </div>
        </div>

        <div class="search-result__btn">
          <custom-btn bLink="${link}" bText="See More"></custom-btn>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('search-result', SearchResult);
