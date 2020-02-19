import {select, text} from '@storybook/addon-knobs';

export default {
    title: 'Components | Input',
};

export const primary = () => {
    const label = text('Label', 'Username');
    const placeholder = text('Placeholder', 'johndoe@gmail.com');
    const type = select('Input type', ['text', 'password', 'number'], 'text');
    const template =
        `<gwvs-input label="${label}" placeholder="${placeholder}" type="${type}"></gwvs-input>`;

    return template;
};
