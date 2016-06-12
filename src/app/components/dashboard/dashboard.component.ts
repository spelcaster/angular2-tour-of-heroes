import { Component, OnInit } from "@angular/core";
import { Router } from "@ngrx/router";

import { Hero } from "../../classes/hero/hero";
import { HeroService } from "../../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    templateUrl: "dashboard.component.html"
})

export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private router: Router, private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes.slice(1, 5)
        );
    }

    gotoDetail(hero: Hero) {
        console.log(hero);
        this.router.go("/detail/" + hero.id);
    }
}
