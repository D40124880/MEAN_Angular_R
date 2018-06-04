// app.component.html

<button [routerLink]="['/alpha']">Load Alpha</button>
<button [routerLink]="['/beta']">Load Beta</button>
<router-outlet></router-outlet> 

// ----- ///// ------// ----- ///// ------// ----- ///// ------// ----- ///// ------

// app-routing.module.ts

import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'alpha',component: AlphaComponent },
  { path: 'beta',component: BetaComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'gamma/:id', component: GammaComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/alpha' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ----- ///// ------// ----- ///// ------// ----- ///// ------// ----- ///// ------

// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
@NgModule({
  declarations: [AppComponent, AlphaComponent, BetaComponent, GammaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ----- ///// ------// ----- ///// ------// ----- ///// ------// ----- ///// ------

// server.js

...
// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
...


// ----- ///// ------// ----- ///// ------// ----- ///// ------// ----- ///// ------

// app.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
  }
  goHome() {
    this._router.navigate(['/home']);
  }
 
}
