import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-list',
  templateUrl: './toggle-list.component.html',
  styleUrl: './toggle-list.component.css'
})
export class ToggleListComponent {
  bikes:string[]=['HeroHond','BMW','Yahama','JavaBike','Bajaj']
  cars:string[]=['Suzuki Swift','Hyundai','Mahindra','kia','Renault']
  clicke:string[]=[]
  bikeClick=()=> this.clicke=this.bikes
  carClick=()=> this.clicke=this.cars
  liClick=(item : string)=>this.data=item
  data:string=""


}
