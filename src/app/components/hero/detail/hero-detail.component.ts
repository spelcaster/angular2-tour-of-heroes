import {
    Component,
    EventEmitter,
    Output,
    Input,
    OnInit,
    OnDestroy
} from "@angular/core";

import {
    Router,
    ActivatedRoute
} from "@angular/router";

import { Observable } from "rxjs/Observable";

import { Hero } from "../../../classes/hero/hero";
import { HeroService } from "../../../services/hero.service";

@Component({
    moduleId: module.id,
    selector: "hero-detail",
    styleUrls: [
        "hero-detail.component.css"
    ],
    templateUrl: "hero-detail.component.html"
})

export class HeroDetailComponent implements OnInit, OnDestroy {
    @Input() hero: Hero;
    @Output() close = new EventEmitter();

    error: any;
    navigated = false;

    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroService: HeroService
    ) {
        console.log("HeroDetailComponent constructor");
    }

    ngOnInit() {
        console.log("HeroDetailComponent OnInit");

        this.sub = this.route.params.subscribe(params => {
            let id = +params["id"];

            if (!id) {
                this.navigated = false;
                this.hero = new Hero();

                return;
            }

            this.navigated = true;

            this.heroService.getHero(id).then(
                hero => this.hero = hero
            );
        });
    }

    ngOnDestroy() {
        console.log("HeroDetailComponent OnDestroy");

        this.sub.unsubscribe();
    }

    save() {
        this.heroService.save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero, w/ id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error); // TODO: Display error msg
    }

    gotoHeroList() {
        let heroId = this.hero ? this.hero.id : null;

        this.router.navigate(
            ["/heroes"],
            {
                queryParams: {id: `${heroId}`, foo: "foo"}
            }
        );
    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);

        if (this.navigated) {
            window.history.back();
        }

    }
}
