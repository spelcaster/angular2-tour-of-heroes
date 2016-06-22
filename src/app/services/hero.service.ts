import "rxjs/add/operator/toPromise";

import { Injectable } from "@angular/core";
import {
    Headers,
    Http
} from "@angular/http";

import { Hero } from "../classes/hero/hero.ts";

@Injectable()
export class HeroService {
    private heroesApiUrl = "api/heroes";

    constructor(private http: Http) {
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesApiUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getHero(id: number) {
        return this.getHeroes()
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    save(hero: Hero): Promise<Hero> {
        if (hero.id) {
            return this.put(hero);
        }

        return this.post(hero);
    }

    delete(hero: Hero) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let url = `${this.heroesApiUrl}/${hero.id}`;

        return this.http.delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // add new hero
    private post(hero: Hero): Promise<Hero> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        return this.http.post(
                this.heroesApiUrl, JSON.stringify(hero), {headers: headers}
            ).toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // update existing hero
    private put(hero: Hero): Promise<Hero> {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let url = `${this.heroesApiUrl}/${hero.id}`;

        return this.http.put(url, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error("An error occured", error);

        return Promise.reject(error.message || error);
    }
}
