import { html, css, LitElement } from 'lit-element';

class TeaShop extends LitElement {
  static get properties() {
    return {
      brandsAmount: {
        type: Number,
        reflect: true,
        attribute: 'brands-amount'
      },
      rating: {
        type: Number,
        reflect: true
      },
      city: {
        type: String,
        reflect: true
      },
      hasEnglishBreakfast: {
        type: Boolean,
        reflect: true,
        attribute: 'has-english-breakfast'
      },
      brands: {
        type: Array,
        hasChanged: (newVal, oldVal) =>
          JSON.stringify(newVal) != JSON.stringify(oldVal)
      }
    };
  }

  static get styles() {
    return css`
      .container {
        padding: 25px;
        display: inline-block;
        background-color: lightgrey;
        border-radius: 5px;
        box-shadow: 0 5px 5px black;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <p>
          We have ${this.brandsAmount} brands in this tea shop, which is located
          in ${this.city}
        </p>
        <p>Our rating is great, we have ${this.rating} out of 5 stars!</p>
        ${this.hasEnglishBreakfast
          ? html`
              <p>We also serve English Breakfast tea</p>
            `
          : html``}
        ${this.brands
          ? html`
              <p>This is the list of brands:</p>
              <ul>
                ${this.brands.map(
                  brand => html`
                    <li>
                      ${brand}
                    </li>
                  `
                )}
              </ul>
            `
          : html``}
      </div>
    `;
  }
}
customElements.define('tea-shop', TeaShop);
