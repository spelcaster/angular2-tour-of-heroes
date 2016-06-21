import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { HeroService } from "../../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "my-app",
    styleUrls: [
        "app.component.css"
    ],
    templateUrl: "app.component.html",
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        HeroService
    ]
})

export class AppComponent {
    title = "My Hero Academia";

    constructor() {
        console.log("AppComponent constructor");
    }
}
