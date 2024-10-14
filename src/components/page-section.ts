import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cw-page-section")
export class CwPageSection extends LitElement {
  @property({ type: String })
  href = "";

  render() {
    return html`<link href="/tailwind-generated.css" rel="stylesheet" />
      <div class="my-8">
        <h3 class="text-4xl mb-6">
          <slot name="section-heading" ></slot>
        </h3>
        <slot></slot>
      </div>`;
  }
}
