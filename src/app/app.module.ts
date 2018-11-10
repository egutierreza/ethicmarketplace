import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { ImpactComponent } from './impact/impact.component';
import { AccountComponent } from './account/account.component';
import { MissionComponent } from './mission/mission.component';
import { EducateComponent } from './educate/educate.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductComponent,
    ImpactComponent,
    AccountComponent,
    MissionComponent,
    EducateComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
