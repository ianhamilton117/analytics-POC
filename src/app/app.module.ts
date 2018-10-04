import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';

const appRoutes: Routes = [
  { path: '', component: RouteOneComponent},
  { path: 'routeone', component: RouteOneComponent },
  { path: 'routetwo', component: RouteTwoComponent },
  { path: '**', redirectTo: '/routetwo'}
]

@NgModule({
  declarations: [
    AppComponent,
    RouteOneComponent,
    RouteTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
