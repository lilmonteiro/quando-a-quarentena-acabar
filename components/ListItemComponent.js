export class ListItemComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = /*html*/ `
            <style>
                .list-item {
                display: flex;
                height: auto;
                flex-direction: row;
                border-bottom: solid 1.2px rgb(215, 215, 215);
                margin-top: 0.8em;
                box-sizing: border-box;
                padding-bottom: 0.8em;
                }

                .list-check-box {
                border: solid 0.2em #674A9E;
                border-radius: 5px;
                width: 1em;
                height: 1em;
                align-self: flex-start;
                }   

                .list-item p {
                margin: 0 0.5em;
                width: 80%;
                align-self: flex-start;
                color:#58595B;
                }

                .list-delete-btn{
                background-color: #674A9E;
                border-radius: 100%;
                width: 1.5em;
                height: 1.5em;
                align-self: flex-start;
                text-align:center;
                font-size: 1em;
                font-weight: 700;
                cursor:pointer;
                color:white;
                }

            </style>
                      
            <div class="list-item">
                <div class="list-check-box"></div>
                <p contenteditable = "true"><slot></slot></p>
                <div class="list-delete-btn">x</div>
            </div>           
        `;
    }

    connectedCallback() {
        console.log('the element is in the DOM');
    }

    disconnectedCallback() {
        console.log('the element is out the DOM');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
    }
}


customElements.define('list-item', ListItemComponent)