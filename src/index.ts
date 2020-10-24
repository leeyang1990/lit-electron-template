import { LitElement, html, css, customElement, property } from "lit-element";
import { render } from "lit-html";
import "./index.css";
@customElement("e-app")
class Index extends LitElement {
	@property({ type: Number }) count: number = 0;
	static get styles() {
		return css`
			.content {
				width: 100%;
				height: 100%;
				align-items: center;
				justify-content: center;
				display: flex;
			}
		`;
	}

	// Implement `render` to define a template for your element.
	render() {
		return html`<div class="content">
			<div><a>lit-electron-template</a></div>
		</div>`;
	}
}

render(html`<e-app></e-app>`, document.getElementById("root")!);
