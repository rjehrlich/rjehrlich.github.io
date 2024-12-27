import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideRouter, withNavigationErrorHandler } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  providers: [
    provideRouter(routes, withNavigationErrorHandler((error) => {
      console.error('Navigation Error:', error);
    }))
  ]
})
export class AppRoutingModule { }
