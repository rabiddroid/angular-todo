import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {NgMainFormComponent} from "./ng-main-form/ng-main-form.component";
import {PageNotFoundComponent} from "./not-found.component";
import {TasklistComponent} from "./ng-tasklist/tasklist.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/tasklists', pathMatch: 'full'},
  {path: 'tasklists', component: NgMainFormComponent},
  {path: 'tasklist', component: TasklistComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
    {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
