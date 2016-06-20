import {
    Component,
    OnInit
} from "@angular/core";

import { Router } from "@angular/router";

import { Hero } from "../../classes/hero/hero";
import { HeroService } from "../../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    templateUrl: "dashboard.component.html"
})

export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService
    ) {
        console.log("DashboardComponent constructor");
    }

    ngOnInit() {
        console.log("DashboardComponent OnInit");

        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes.slice(1, 5)
        );
    }

    gotoHeroDetail(hero: Hero) {
        console.log("DashboardComponent::gotoHeroDetail");
        this.router.navigate(["/hero", hero.id]);
    }
}
