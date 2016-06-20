import {
    Component,
    OnInit,
    OnDestroy
} from "@angular/core";

import { Router } from "@angular/router";

import { Hero } from "../../../classes/hero/hero";
import { HeroService } from "../../../services/hero.service";

@Component({
    selector: "hero-list",
    styles: [`
        .selected {
            background-color: #CFD8DC !important;
            color: white;
        }
        .heroes {
            margin: 0 0 2em 0;
            list-style-type: none;
            padding: 0;
            width: 15em;
        }
        .heroes li {
            cursor: pointer;
            position: relative;
            left: 0;
            background-color: #EEE;
            margin: .5em;
            padding: .3em 0;
            height: 1.6em;
            border-radius: 4px;
        }
        .heroes li.selected:hover {
            background-color: #BBD8DC !important;
            color: white;
        }
        .heroes li:hover {
            color: #607D8B;
            background-color: #DDD;
            left: .1em;
        }
        .heroes .text {
            position: relative;
            top: -3px;
        }
        .heroes .badge {
            display: inline-block;
            font-size: small;
            color: white;
            padding: 0.8em 0.7em 0 0.7em;
            background-color: #607D8B;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -4px;
            height: 1.8em;
            margin-right: .8em;
            border-radius: 4px 0 0 4px;
        }
    `],
    template: `
<h2>Heroes</h2>
<ul class="heroes">
    <li *ngFor="let hero of heroes"
        (click)="gotoHeroDetail(hero)"
        [class.selected]="isSelected(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
</ul>
    `
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
