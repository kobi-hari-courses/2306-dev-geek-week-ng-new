import { Routes } from "@angular/router";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";

export default [
    { path: '', redirectTo: 'one', pathMatch: 'full'},
    { path: 'one', component: OneComponent}, 
    { path: 'two', component: TwoComponent}
]