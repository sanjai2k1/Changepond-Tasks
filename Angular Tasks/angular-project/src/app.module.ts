import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ToggleImgComponent } from './Task/toggle-img/toggle-img.component';
import { ToggleListComponent } from './Task/toggle-list/toggle-list.component';


@NgModule({
  declarations: [
   
    ToggleImgComponent,
    ToggleListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  
  providers: [
    provideClientHydration(),
  
  ],

})
export class AppModule { }
