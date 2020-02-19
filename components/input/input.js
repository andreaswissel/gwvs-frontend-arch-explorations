export class GwvsInput extends HTMLElement {
    constructor() {
        super();

        const template = document
            .getElementById(GwvsInput.name)
            .content;
        this.shadowRootNode = this.attachShadow({mode: 'open'})
            .appendChild(template.cloneNode(true));
    }

    connectedCallback() {
        if (!this.hasAttribute('type')) {
            this.setAttribute('type', 'text');
        }
    }

    static get observedAttributes() {
        return ['type', 'label', 'placeholder'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'label':
                this.label = newValue;
                break;
            case 'type':
                this.type = newValue;
                break;
            case 'placeholder':
                this.placeholder = newValue;
                break;
        }
    }

    get placeholder() {
        return this.getAttribute('placeholder');
    }

    set placeholder(newValue) {
        this.shadowRoot.querySelector('input').placeholder = newValue;
    }

    get label() {
        return this.getAttribute('label');
    }

    set label(newValue) {
        this.shadowRoot.querySelector('label').innerText = newValue;
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(newValue) {
        this.shadowRoot.querySelector('input').type = newValue;
    }

    static get template() {
        return `
            <style>
                :host {
                  display: flex;
                  flex-direction: column;
                  font-family: "SF Pro Display", Helvetica, Arial, sans-serif;
                  font-size: 13px;
                  line-height: 16px;
                }
                
                label {
                  font-weight: 600;
                  color: #041C31;
                  margin-bottom: 8px;
                }
                
                input {
                  border: 1px solid #E4E8F3;
                  box-sizing: border-box;
                  border-radius: 10px;
                  padding: 12px;
                  outline: none;
                  transition: .15s border-color ease-in-out, .15s box-shadow ease-in-out;
                }
                
              input:focus {
                border-color: #0085FC;
                box-shadow: 0 0 10px -5px #0085FC;
              }
                
                ::placeholder {
                  color: #9BA1B4;
                  opacity: 1;
                }
            </style>
            <label>
                <slot name="label"></slot>
            </label>
            <input type="type" placeholder="">
        `;
    }
}
