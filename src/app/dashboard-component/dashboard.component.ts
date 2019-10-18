import {Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {

  @Input()
  patientData: any;
  constructor(
  ) {
  }

  ngOnChanges() {
    console.log(this.patientData);
  }

  ngOnInit() {

  }
}
