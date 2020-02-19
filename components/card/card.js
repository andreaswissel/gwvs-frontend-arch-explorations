export class GwvsCard extends HTMLElement {
    constructor() {
        super();

        const template = document
            .getElementById(GwvsCard.name)
            .content;
        this.shadowRootNode = this.attachShadow({mode: 'open'})
            .appendChild(template.cloneNode(true));
    }

    static get template() {
        return `
            <style>
                :host {
                    background: #FFFFFF;
                    border: 1px solid #E4E8F3;
                    box-sizing: border-box;
                    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
                    border-radius: 10px;
                    display: flex;
                    max-width: 500px;
                    margin: auto;
                    padding: 32px 24px 24px;
                }
            </style>
            <slot name="content"></slot>
        `;
    }
}
