class SearchBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(e) {
        this._clickEvent = e;
        this.render();
    }

    get value() {
        return this._shadowRoot.querySelector("#searchElement").value;
    }

    render() {
        this._shadowRoot.innerHTML = `
        <style>
        .search-container {
            margin-top: 60px;
            max-width: 800px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 18px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
        }
        .search-container>input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid #eb2146;
            font-weight: bold;
            transition: .3s;
            font-size: 14px;
        }
        .search-container>input:focus {
            outline: 0;
            border-bottom: 2px solid #eb2146;
        }
        .search-container>input:focus::placeholder {
            font-weight: bold;
        }
        .search-container>input::placeholder {
            color: #eb2146;
            font-weight: normal;
        }
        .search-container>button {
            outline: none;
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #cf2141;
            color: white;
            border: 0;
            text-transform: uppercase;
            transition: .5s;
        }
        .search-container>button:hover {
            background-color :#eb2146
        }
        @media screen and (max-width: 550px) {
            .search-container {
                flex-direction: column;
                position: static;
            }
            .search-container>input {
                width: 100%;
                margin-bottom: 12px;
            }
            .search-container>button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search Country" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;
        this._shadowRoot.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);