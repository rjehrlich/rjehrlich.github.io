import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideRouter, withNavigationErrorHandler } from '@angular/router';

const routes: Routes = [];

@NgModule({
  providers: [
    provideRouter(routes, withNavigationErrorHandler((error) => {
      console.error('Navigation Error:', error);
    }))
  ]
})
export class AppRoutingModule { }
