import { bootstrap } from "@angular/platform-browser-dynamic";

import { AppComponent } from "./components/app/app.component";
import { APP_ROUTER_PROVIDERS } from "./components/app.routes";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));
