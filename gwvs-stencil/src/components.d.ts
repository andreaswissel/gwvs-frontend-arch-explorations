/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppButton {
    'label': string;
  }
}

declare global {


  interface HTMLAppButtonElement extends Components.AppButton, HTMLStencilElement {}
  var HTMLAppButtonElement: {
    prototype: HTMLAppButtonElement;
    new (): HTMLAppButtonElement;
  };
  interface HTMLElementTagNameMap {
    'app-button': HTMLAppButtonElement;
  }
}

declare namespace LocalJSX {
  interface AppButton {
    'label'?: string;
  }

  interface IntrinsicElements {
    'app-button': AppButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-button': LocalJSX.AppButton & JSXBase.HTMLAttributes<HTMLAppButtonElement>;
    }
  }
}


