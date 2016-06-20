import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { HeroService } from "../../services/hero.service";

@Component({
    selector: "my-app",
    template: `
<h1>{{title}}</h1>
<nav>
    <a [routerLink]="['/dashboard']">Dashboard</a>
    <a [routerLink]="['/heroes']">Heroes</a>
</nav>
<!-- Routed views fo here -->
<router-outlet></router-outlet>
    `,
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
