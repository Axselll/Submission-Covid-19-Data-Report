class AppBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                position: relative
                width: 100%;
                background-color: #eb2146;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                margin-left: 90px;
                padding: 25px;
            }
            img {
                position: absolute;
                left: 58px;
                top: 18px;
                width: 50px;
            }
        </style>
        <h2>Covid-19 Data Report</h2>
        <img src="/src/logo/C19.png" alt="dummy-logo">`;
    }
}

customElements.define("app-bar", AppBar);