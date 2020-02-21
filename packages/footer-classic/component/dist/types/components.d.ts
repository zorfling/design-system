/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface UqFooterClassic {
    'loginUrl': string;
    'logoutUrl': string;
    'pageLastUpdated': string;
    'pageUrl': string;
    'showLogin': boolean;
    'showLogout': boolean;
  }
}

declare global {


  interface HTMLUqFooterClassicElement extends Components.UqFooterClassic, HTMLStencilElement {}
  var HTMLUqFooterClassicElement: {
    prototype: HTMLUqFooterClassicElement;
    new (): HTMLUqFooterClassicElement;
  };
  interface HTMLElementTagNameMap {
    'uq-footer-classic': HTMLUqFooterClassicElement;
  }
}

declare namespace LocalJSX {
  interface UqFooterClassic {
    'loginUrl'?: string;
    'logoutUrl'?: string;
    'pageLastUpdated'?: string;
    'pageUrl'?: string;
    'showLogin'?: boolean;
    'showLogout'?: boolean;
  }

  interface IntrinsicElements {
    'uq-footer-classic': UqFooterClassic;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'uq-footer-classic': LocalJSX.UqFooterClassic & JSXBase.HTMLAttributes<HTMLUqFooterClassicElement>;
    }
  }
}


