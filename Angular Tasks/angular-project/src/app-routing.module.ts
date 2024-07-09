import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleImgComponent } from './Task/toggle-img/toggle-img.component';
import { ToggleListComponent } from './Task/toggle-list/toggle-list.component';

const routes: Routes = [

 {path:"toggleimg",component:ToggleImgComponent},
 {path:"togglelist",component:ToggleListComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
