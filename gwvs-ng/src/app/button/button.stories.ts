import {ButtonComponent} from './button.component';
import {select, text} from '@storybook/addon-knobs';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

export default {
  title: 'Components | Button',
  component: ButtonComponent,
};

export const primary = () => ({
  moduleMetadata: {
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  },
  component: ButtonComponent,
  props: {
    label: text('Label', 'A different label'),
  }
});
