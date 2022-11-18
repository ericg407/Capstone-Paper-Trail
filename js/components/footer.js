import "/css/components/footer.css";

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="screenFiller" id="nav-bar__container">
    <div class="nav-bar__wrap">
    <footer>
    <p>Author: Capstone-Paper-Trail &copy: 2022</p>
    </footer>
      <nav class="nav-bar__menu">
      <div class="nav-bar">

              <a href="#" rel="noopener noreferrer" class="page-btn menu-list__btn-link">
                <span class="menu-list__btn-text">Go To Top</span>
              </a>
        
        </nav>
      </div>
    </div>
  </div>
    `;
  }
}

customElements.define("custom-footer", Footer);
