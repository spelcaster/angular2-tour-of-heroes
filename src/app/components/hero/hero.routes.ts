import {
    provideRouter,
    RouterConfig
} from "@angular/router";

import { HeroDetailComponent } from "./detail/hero-detail.component";
import { HeroListComponent } from "./list/hero-list.component";

export const HeroRoutes: RouterConfig = [
    {
        path: "heroes",
        component: HeroListComponent
    },
    {
        path: "hero/:id",
        component: HeroDetailComponent
    }
];
