import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MyNameComponent } from './my-name/my-name.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectJoinComponent } from './project-join/project-join.component';
import { ProjectElPolloLocoComponent } from './project-el-pollo-loco/project-el-pollo-loco.component';
import { ProjectPortfolioComponent } from './project-portfolio/project-portfolio.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ProjectDaBubbleComponent } from './project-da-bubble/project-da-bubble.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HeaderComponent } from './header/header.component';
import { ROUTES, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MyNameComponent,
    AboutMeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    ProjectJoinComponent,
    ProjectElPolloLocoComponent,
    ProjectPortfolioComponent,
    FooterComponent,
    LegalNoticeComponent,
    ProjectDaBubbleComponent,
    MainpageComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 128] // [x, y]
    })
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }