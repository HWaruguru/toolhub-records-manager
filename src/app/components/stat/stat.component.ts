import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  @Input() title: string;
  @Input() totalNumber: number;

  constructor() {}

  ngOnInit(): void {
  }

}
