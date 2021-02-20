import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { UserdataComponent } from './userdata/userdata.component';
import { RestService } from './services/RestService';
import { DialogBoxComponent, DialogContentExampleDialog } from './dialog-box/dialog-box.component';
import { UserService } from './services/UserService';


@NgModule({
  declarations: [ AppComponent, UserdataComponent, DialogBoxComponent, DialogBoxComponent, DialogContentExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DialogBoxComponent, DialogContentExampleDialog],
  providers: [RestService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));