import {
    Component,
    OnInit,
    OnDestroy
} from "@angular/core";

import { Router } from "@angular/router";

import { Hero } from "../../../classes/hero/hero";
import { HeroService } from "../../../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "hero-list",
    styleUrls: [
        "hero-list.component.css"
    ],
    templateUrl: "hero-list.component.html",
})

export class HeroListComponent implements OnInit, OnDestroy {
    heroes: Hero[];

    private selectedId: number;
    private sub: any;

    constructor(
        private router: Router,
        private heroService: HeroService
    ) {
        console.log("HeroListComponent constructor");
    }

    ngOnInit() {
        console.log("HeroListComponent OnInit");

        this.sub = this.router.routerState.queryParams.subscribe(params => {
            this.selectedId = +params["id"];

            console.log(this.selectedId);

            this.getHeroes();
        });
    }

    ngOnDestroy() {
        console.log("HeroListComponent OnDestroy");

        this.sub.unsubscribe();
    }

    getHeroes() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    isSelected(hero: Hero) {
        return hero.id === this.selectedId;
    }

    gotoHeroDetail(hero: Hero) {
        console.log("HeroListComponent::gotoHeroDetail");
        this.router.navigate(["/hero", hero.id]);
    }
}
