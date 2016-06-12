import "rxjs/add/operator/pluck";

import { Component, Input, OnInit } from "@angular/core";
import { RouteParams } from "@ngrx/router";

import { Observable } from "rxjs/Observable";

import { Hero } from "../../classes/hero/hero";
import { HeroService } from "../../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "my-hero-detail",
    templateUrl: "detail.component.html"
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this.routeParams.pluck(":id");

        console.log(id);

        this.heroService.getHero(id).then(
            hero => this.hero = hero
        );
    }

    goBack() {
        window.history.back();
    }
}
