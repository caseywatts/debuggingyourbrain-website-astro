import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('cw-hero')
export class CwHero extends LitElement {
  @property({type: String})
  backgroundImageSrc = "/assets/img/DYB Banner.jpg";

  render() {
    return html`<link href="/tailwind-generated.css" rel="stylesheet" />
      <div class="min-h-80 p-2 flex" style="background-image:url('${this.backgroundImageSrc}'); background-size: cover; background-position: 50% 50%">
        <slot></slot>
      </div>`;
  }
}
