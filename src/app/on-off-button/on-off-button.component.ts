import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-on-off-button',
  templateUrl: './on-off-button.component.html',
  styleUrls: ['./on-off-button.component.css']
})
export class OnOffButtonComponent implements OnInit {
  @Input() status: boolean;
  btnStyle = {true: 'btn-on', false: 'btn-off'};
  title = {true: 'ON', false: 'OFF'};

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.status = (this.status) ? false : true;
  }
}