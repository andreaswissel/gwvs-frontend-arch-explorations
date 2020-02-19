import {text} from '@storybook/addon-knobs';

export default {
  title: 'Components | Button',
};

export const primary = () => {
  const label = text('Label', 'Submit');
  const template = `<app-button label="${label}"></app-button>`;

  return template;
};
