export class GwvsButton extends HTMLElement {
    constructor() {
        super();

        const template = document
            .getElementById(GwvsButton.name)
            .content;
        this.shadowRootNode = this.attachShadow({mode: 'open'})
            .appendChild(template.cloneNode(true));
    }

    static get template() {
        return `
            <style>
                button {
                    background: #0085FC;
                    border: 1px solid #0357A3;
                    box-sizing: border-box;
                    box-shadow: inset 0px 2px 0px rgba(202, 230, 255, 0.15);
                    border-radius: 5px;
        
                    font-family: "SF Pro Display", Helvetica, Arial, sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 13px;
                    line-height: 16px;
                    display: flex;
                    align-items: center;
                    text-align: center;
        
                    color: #FFFFFF;
        
                    padding: 11px 16px;
                }
            </style>
            <button>
                <slot name="label"></slot>
            </button>`;
    }
}
