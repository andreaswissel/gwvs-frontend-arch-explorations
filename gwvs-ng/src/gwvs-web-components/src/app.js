import {GwvsCard} from '../../components/card/card.js';
import {GwvsButton} from '../../components/button/button.js';
import {GwvsInput} from '../../components/input/input.js';

export class GwvsApp {
    constructor() {
        this.components = [GwvsCard, GwvsButton, GwvsInput];

        for (let component of this.components) {
            this.createTemplate(component.template, component.name);
            this.defineCustomElement(component);
        }
    }

    defineCustomElement(component) {
        customElements.define(this.createElementName(component.name), component);
    }

    createElementName(string) {
        return string.replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
            return "-" + y.toLowerCase()
        }).replace(/^-/, "");
    }

    createTemplate(template, name) {
        const templateElement = document.createElement('template');
        templateElement.id = name;
        templateElement.innerHTML = template;
        document.body.appendChild(templateElement);
    }
}
