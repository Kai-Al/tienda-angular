import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  constructor() { }

  
  @Input() img: string = '';

}
