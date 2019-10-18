import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  patientData = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    dateOfBirth: Date,
    sex: '',
    country: '',
    state: '',
    address: '',
    icon: ''
  };

  @Output()
  changePatientList = new EventEmitter();

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  savePatient() {
    this.api.savePatients(this.patientData).subscribe( (value => {
      this.changePatientList.emit();
    }));
  }
}
