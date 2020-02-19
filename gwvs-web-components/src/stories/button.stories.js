import {text} from '@storybook/addon-knobs';

export default {
    title: 'Components | Button',
};

export const primary = () => {
    const label = text('Label', 'Submit');
    const template =
        `<gwvs-button>
            <span slot="label">${label}</span>
        </gwvs-button>`;

    return template;
};
