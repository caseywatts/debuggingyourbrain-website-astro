import { LitElement, html } from "lit";

export class CwHeader extends LitElement {
  render() {
    return html`<link href="/tailwind-generated.css" rel="stylesheet" />
      <header class="drop-shadow-md hover:drop-shadow-sm transition ease-in-out duration-500">
        <nav class="shadow bg-gradient-to-r from-violet-100 to-blue-100">
          <div class="px-6 py-4 mx-auto lg:flex justify-between items-center space-x-6">
            <div class="flex items-center justify-between">
              <div>
                <slot name="siteTitle"></slot>
              </div>

              <!-- Mobile menu button -->
              <div class="flex lg:hidden">
                <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600 " aria-label="toggle menu" onclick="showHideMobileNavMenu()">
                  <svg viewBox="0 0 24 24" height="24px" width="24px" class="fill-current">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div id="mainNav" class="flex-grow justify-between items-center hidden lg:flex lg:space-x-10">
              <div class="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-6 space-y-2 lg:space-y-0">
                <slot name="links"></slot>
              </div>
              <hr class="block lg:hidden w-1/3 h-1 mx-auto my-3 lg:my-0 flex-1 bg-slate-300" />
              <div class="flex flex-col lg:flex-row items-center space-x-0 space-y-2 lg:space-y-0 lg:space-x-6">
                <slot name="links-right"></slot>
                <div class="lg:space-x-2 my-3 lg:my-0">
                  <slot name="social-media"></slot>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <script is:inline>
        function showHideMobileNavMenu() {
          var mainNav = document.getElementById("mainNav");
          if (mainNav.classList.contains("hidden")) {
            mainNav.classList.remove("hidden");
          } else {
            mainNav.classList.add("hidden");
          }
        }
      </script>`;
  }
}

customElements.define("cw-header", CwHeader);
