import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css']
})
export class MaskComponent implements OnInit {
  public model: string;

  ngOnInit(): void {
  }
  
  public mask: Array<string | RegExp>;
  constructor() { 
    this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
    this.model = '';
  }

}
