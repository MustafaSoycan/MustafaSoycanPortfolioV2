import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }