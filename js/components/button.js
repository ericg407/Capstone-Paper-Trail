import '/css/components/button.css';

class CustomButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const link = this.getAttribute('bLink') || '#';
        const text = this.getAttribute('bText');

        this.innerHTML = `
      <div class="custom-btn">
        <a href="${link}" target="_blank" rel="noopener noreferrer" class="page-btn custom-btn__link">
          <span class="custom-btn__link-text">${text}</span>
        </a>
      </div>
    `;
        const customBtn = document.getElementsByClassName('custom-btn');
        // customBtn
    }

}

customElements.define('custom-btn', CustomButton);