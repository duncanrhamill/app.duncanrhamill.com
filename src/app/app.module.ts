import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdNgImports } from './md-ng-imports.module';

import { AppComponent } from './app.component';
import { AppsListComponent } from './apps/apps-list/apps-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdNgImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    
 }
