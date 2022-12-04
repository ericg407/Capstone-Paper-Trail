import '/css/components/footer.css';

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer id="footer-container">
        <div class="footer-wrap">
          <div class="footer-wrap__copyright">
            <p>Copyright &copy 2022 Paper Trail</p>
          </div>
      
          <div class="footer-wrap__btt">
            <div class="footer-wrap__btt-btn">
              <a href="#" rel="noopener noreferrer" class="page-btn">
                <span class="footer-wrap__btt-btn-text">Back To Top</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', Footer);
