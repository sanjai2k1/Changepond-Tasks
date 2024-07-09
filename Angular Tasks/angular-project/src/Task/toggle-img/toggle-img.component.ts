import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-img',
  templateUrl: './toggle-img.component.html',
  styleUrl: './toggle-img.component.css'
})
export class ToggleImgComponent {
  photo1:string="assets/images/even-2.jpg"
  photo2:string="assets/images/even-3.jpg"
  photo1name:string="dolphin"
  photo2name:string="ostrich"
  photo:string=this.photo1
  photoname:string=this.photo1name
  count:number=0
  clicked (){
    this.photo = this.count%2==0 ? this.photo1  : this.photo2
    this.photoname = this.count%2==0 ? this.photo1name  : this.photo2name
    this.count++
  }
}
