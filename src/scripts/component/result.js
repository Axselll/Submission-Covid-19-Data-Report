class ResultImg extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({
      mode: "open",
    });
  }

  set country(country) {
    this._country = country;
    this.render();
  }

  renderError(message) {
    this._shadowRoot.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>
        `;
    this._shadowRoot.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing 0;
            }
            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            img {
                width: 150px;
            }
        </style>
            <img id="img" src="${this._country}">
        `;
  }
}

customElements.define("result-img", ResultImg);
