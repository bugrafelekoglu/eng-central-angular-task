import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-button-grid',
  templateUrl: './button-grid.component.html',
  styleUrls: ['./button-grid.component.css']
})
export class ButtonGridComponent implements OnInit {
  @Input() grid: boolean[][];
  constructor() { 

  }

  ngOnInit() {
    
  }

}