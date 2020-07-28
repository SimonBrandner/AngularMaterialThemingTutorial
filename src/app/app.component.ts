import { Component, HostBinding } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: [
		"./app.component.scss"
	]
})
export class AppComponent {
	title = "AngularMaterialThemingTutorial";
	constructor(public overlayContainer: OverlayContainer) {
		this.setTheme("Indigo & Pink");
	}

	themeChanged() {
		this.setTheme(this.selectedTheme);
	}

	setTheme(theme: string) {
		theme = this.themeMap.get(theme);
		this.currentTheme = theme;
		var classList = this.overlayContainer.getContainerElement().classList;

		if (classList.contains(this.activeThemeCssClass)) {
			classList.replace(this.activeThemeCssClass, theme);
		}
		else {
			classList.add(theme);
		}
		console.log("Setting theme to " + theme);
		this.activeThemeCssClass = theme;
	}

	@HostBinding("class") activeThemeCssClass: string;
	currentTheme: string;
	selectedTheme: string = "Indigo & Pink";
	themes = [
		"Indigo & Pink",
		"Custom"
	];

	themeMap: Map<string, string> = new Map([
		[
			"Indigo & Pink",
			"indigo-pink"
		],
		[
			"Custom",
			"custom"
		]
	]);
}
