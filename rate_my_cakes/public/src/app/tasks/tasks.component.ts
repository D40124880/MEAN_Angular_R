import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Input() displayOneCake: any;
  @Input() average: any;

  constructor() { }

  ngOnInit() {
  }

}
