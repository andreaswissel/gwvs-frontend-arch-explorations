import {text} from '@storybook/addon-knobs';

export default {
    title: 'Components | Card',
};

export const primary = () => {
    const textContent = text('Text', 'Content goes here');
    const template =
        `<gwvs-card>
            <span slot="content">${textContent}</span>
        </gwvs-card>`;

    return template;
};
