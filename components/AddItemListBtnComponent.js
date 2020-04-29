export class AddItemListBtnComponent extends HTMLElement {
    constructor() {
        super();
        console.log("hei")
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = /*html*/ `
            <style>
                .add-list-item-container {
                display: flex;
                height: auto;
                flex-direction: row;
                margin: 0.8em auto 0 auto;
                border-radius: 2em;
                box-sizing: border-box;
                padding: 0.5em;
                background-color: #CE97FF;
                align-content: center;
                justify-content: center;
                width: 15em;
                cursor: pointer;
                }

                .add-item-btn {
                background-color: #46317A;
                border-radius: 100%;
                width: 1.3em;
                height: 1.3em;
                align-self: center;
                text-align: center;
                color: white;
                font-size: 1.3em;
                font-weight: 700;
                }

                .add-list-item-container p {
                margin: 0 0.5em;
                width: auto;
                align-self: center;
                }
                       
            </style>
           
           <div class="add-list-item-container">
                <div class="add-item-btn">+</div>
                <p>Adicionar desejo</p>
            </div>
        `;
    }

    connectedCallback() {
        console.log('the element is in the DOM');
    }    

    disconnectedCallback() {
        console.log('the element is out the DOM');
    }    
    
    attributeChangedCallback(name, oldValue, newValue){
        console.log(name, oldValue, newValue);
    }
}


customElements.define('add-item-list-btn', AddItemListBtnComponent)