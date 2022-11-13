import '/css/components/addressForm.css';

class CustomAddressForm extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
  
      this.innerHTML = `
      <main>
      <div class="wrapper">
        <form>
          <div>
            <label for="street-address">Street address</label>
            <input type="text" id="street-address" name="street-address" autocomplete="street-address" required enterkeyhint="next"></input>
          
          </div>
          <div>
            <label for="city">City</label>
            <input required type="text" id="city" name="city" autocomplete="address-level2" enterkeyhint="next">
          </div>
          <div>
            <label for="postal-code">ZIP or postal code</label>
            <input class="postal-code" id="postal-code" name="postal-code" autocomplete="postal-code" enterkeyhint="next">
          </div>
          <div>
            <label for="country">Country or region</label>
            <select id="country" name="country" autocomplete="country" enterkeyhint="done" required>
                <option value="US">United States</option>
            </select> 
          </div>
        </form>
      </div>
    </main>
      `;
    }
  }
  
  customElements.define('custom-address-form', CustomAddressForm);
