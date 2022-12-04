import '/css/components/header.css';

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="nav-bar__container">
        <div class="nav-bar__wrap">
          <div class="nav-bar__logo">
            <img src="../assets/img/paper-trail-logo.png" alt="Capstone Project" id="logo" />
          </div>

          <div class="nav-bar">
            <nav class="nav-bar__menu">
              <ul class="menu-list">
                <li class="menu-list__item"><a href="./#home">Home</a></li>
                <li class="menu-list__item"><a href="./#about">About</a></li>
                <li class="menu-list__item menu-list__btn">
                  <a href="#" rel="noopener noreferrer" class="page-btn menu-list__btn-link">
                    <span class="menu-list__btn-text">Go Vote!</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-header', Header);
