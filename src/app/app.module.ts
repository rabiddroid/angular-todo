import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {NgMainFormComponent} from "./ng-main-form/ng-main-form.component";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./not-found.component";
import {TasklistComponent} from './ng-tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    NgMainFormComponent,
    PageNotFoundComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
