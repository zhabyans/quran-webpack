class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        :host{
            height: 60px;
            background-color: #206a5d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            margin-bottom: 25px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 28px;
        }
       </style>
       <h3>
       Quran Kita
     </h3>`;
    }
}

customElements.define("app-bar", AppBar);
