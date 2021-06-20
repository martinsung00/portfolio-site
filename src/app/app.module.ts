import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { BadgesComponent } from './badges/badges.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, IntroComponent, ProfileCardComponent, AboutMeComponent, PortfolioComponent, SkillsetComponent, BadgesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
