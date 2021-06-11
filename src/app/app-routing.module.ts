import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './home/home.component';
import { AboutComponent } from  './about/about.component';
import { ResumeComponent } from  './resume/resume.component';
import { SkillsComponent } from  './skills/skills.component';
import { PortfolioComponent } from  './portfolio/portfolio.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { ContactComponent } from  './contact/contact.component';

const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'about', component:  AboutComponent },
  { path: 'resume', component:  ResumeComponent },
  { path: 'skills', component:  SkillsComponent },
  { path: 'portfolio', component:  PortfolioComponent },
  { path: 'portfoliodetails', component:  PortfolioDetailsComponent },
  { path: 'contact', component:  ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
