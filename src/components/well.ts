import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('cw-well')
export class CwWell extends LitElement {
  @property({type: String})
  href = "";

  render() {
    return html`<link href="/tailwind-generated.css" rel="stylesheet" />
      <div class="p-3 bg-white shadow-lg border-slate-300 border-2 mx-auto h-full">
        <div class="mb-4">
          <slot name="heading" class="text-2xl"></slot>
        </div>
        <slot></slot>
      </div>`;
  }
}
