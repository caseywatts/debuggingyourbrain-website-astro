import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('cw-header-link')
export class CwHeaderLink extends LitElement {
  @property({type: String})
  href = "";

  render() {
    return html`<link href="/tailwind-generated.css" rel="stylesheet" />
      <a class="text-gray-700 hover:text-indigo-500 text-center mx-3" href=${this.href}>
        <slot></slot>
      </a>`;
  }
}
