import '/css/components/header.css';
import * as img from '/img/paper-trail-logo.png';

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="nav-bar__container">
        <div class="nav-bar__wrap">
          <div class="nav-bar__logo">
            <img src="${img.default}" alt="Capstone Project" id="logo" />
          </div>

          <div class="nav-bar">
            <nav class="nav-bar__menu">
              <ul class="menu-list">
                <li class="menu-list__item"><a href="https://paper-trail.us">Home</a></li>
                <li class="menu-list__item menu-list__btn">
                  <a href="https://www.vote.org/" target="_blank" rel="noopener noreferrer" class="page-btn menu-list__btn-link">
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
