import { html, css, LitElement } from 'lit-element';

class HelloWorld extends HTMLElement {
  /* static get properties() {
    return {
      mood: {
        type: String,
        reflect: true
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
  } */

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['mood'];
  }

  get mood() {
    return this.getAttribute('mood');
  }

  set mood(value) {
    this.setAttribute('mood', value);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'mood') {
      if (oldVal !== newVal) {
        this.render();
      }
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          padding: 25px;
          display: inline-block;
          background-color: lightgrey;
          border-radius: 5px;
          box-shadow: 0 5px 5px black;
        }
      </style>
      <div class="container">
        Today, we are ${this.mood}!
      </div>
    `;
  }
}
customElements.define('hello-world', HelloWorld);
