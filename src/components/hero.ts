import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('cw-hero')
export class CwHero extends LitElement {
  @property({type: String})
  backgroundImageSrc = "/assets/img/DYB Banner.jpg";

  render() {
    return html`<link href="/tailwind-generated.css" rel="stylesheet" />
      <div class="h-80" style="background-image:url('${this.backgroundImageSrc}'); background-size: cover; background-position: 0 50%">
        <slot></slot>
      </div>`;
  }
}
