import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnChanges {

  @Input()
  patientData: any;

  @Output()
  changePatientList = new EventEmitter();

  constructor(
    private api: ApiService
  ) {
  }

  ngOnChanges() {
    console.log(this.patientData);
  }

  ngOnInit() {

  }

  savePatient() {
    this.api.savePatients(this.patientData).subscribe( (value => {
      this.changePatientList.emit();
    }));
  }

  deletePatient(id) {
    this.api.deletePatient(this.patientData.id).subscribe((value => {
      this.changePatientList.emit();
    }));
  }
}
