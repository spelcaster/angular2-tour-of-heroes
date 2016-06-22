// imports for loading and configuring the in-memory web api
import { XHRBackend } from "@angular/http";
import {
    InMemoryBackendService,
    SEED_DATA
} from "angular2-in-memory-web-api";

import { InMemoryDataService } from "./services/in-memory-data.service";

// bootstrapping imports
import { bootstrap } from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS } from "@angular/http";

import { AppComponent } from "./components/app/app.component";
import { APP_ROUTER_PROVIDERS } from "./components/app.routes";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    { // in-mem server
        provide: XHRBackend,
        useClass: InMemoryBackendService
    },
    { // in-mem server data
        provide: SEED_DATA,
        useClass: InMemoryDataService
    }
]).catch(err => console.error(err));
